/*&nbsp;&nbsp;&nbsp;eslint-disable no-unused-vars */
/*&nbsp;&nbsp;&nbsp;eslint-disable jsx-a11y/alt-text */
import { css } from '@emotion/react'
import axios from 'axios'
import { ethers } from 'ethers'
import { useContext, useEffect, useRef, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import useRazorpay from 'react-razorpay'
import { Modal } from 'react-responsive-modal'
import ClipLoader from 'react-spinners/ScaleLoader'
import { getLastTokenId, mint, mintUsingTier } from '../api/nft'
import siteConfig from '../config/site.config'
import { AppContext } from '../context/AppContext'
import usePrice from '../hooks/usePrice'
import { formatAmount } from '../utils'
import { parseProviderErrorMessage } from '../utils/errors'
//import ReactPlayer from 'react-player'
// import usePrice from '../hooks/usePrice'
import { AnimationOnScroll } from './AnimationOnScroll'
import VerticalLinearStepper from './Stepper'

import './styles.css'

const l1_inrCost = 800;
const l1_usdCost = 10;
const l2_inrCost = 2400;
const l2_usdCost = 30;
const l3_inrCost = 4800;
const l3_usdCost = 60;
const l4_inrCost = 20000;
const l4_usdCost = 250;

const tiers = {
    gold: {
        code: 0,
        costInUSD: 10,
        costInEther: ethers.utils.parseEther('12'),
    },
    platinum: {
        code: 1,
        costInUSD: 30,
        costInEther: ethers.utils.parseEther('36'),
    },
    diamond: {
        code: 2,
        costInUSD: 60,
        costInEther: ethers.utils.parseEther('72'),
    },
    royal: {
        code: 3,
        costInUSD: 250,
        costInEther: ethers.utils.parseEther('297'),
    },
}

const SHOW_COST_IN_CRYPTO = true


const Infos = () => {
    const { account, getAccBalance, setOpenSeaModel, connectWallet } =
        useContext(AppContext)

    const balanceRef = useRef()

    useEffect(() => {
        if (account) {
            ;(async () => {
                balanceRef.current = await getAccBalance()
            })()
        }
    }, [account, getAccBalance])

    let [loading1, setLoading1] = useState(false)
    let [loading2, setLoading2] = useState(false)
    let [loading3, setLoading3] = useState(false)
    let [loading4, setLoading4] = useState(false)
    // const [cmodel, setCModal] = useState(false)
    const [openModal, setopenModal] = useState(false)
    const [successMintModal, setSuccessMintModal] = useState(false)    
    const [askEmailModal, setAskEmailModal] = useState(false)
    //const [playVideoModal,setPlayVideoModal]= useState(false)
    const [cost, setCost] = useState(null)
    const [tier, setTier] = useState(null)
    const [, setPriceValue] = useState('')
    const [amount] = useState(1)
    const [selectedInrAmount, setSelectedInrAmount] = useState(0)
    const [selectedPlan, setSelectedPlan] = useState("")
    const [email, setEmail] = useState("")
    let [loading, setLoading] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [cryptoPaymentModalOpen, setCryptoPaymentModalOpen] = useState()

    // Progress
    const progressRef = useRef(0)
    const [progress, setProgress] = useState(progressRef.current)
    const [progressError, setProgressError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState(false);

    const validateEmail  = (emailId) => {
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailId)){
            setEmailErrorMessage(true);
            return false;
        }else{
            return true;
        }
    }
    const proceed = () => {
        progressRef.current = progressRef.current + 1
        setProgress(progressRef.current)
    }
    const resetProgress = () => {
        setProgress(0)
        progressRef.current = 0
        setProgressError(false)
        setCryptoPaymentModalOpen(false)
    }
    
    const onOpenModal = () => setOpenSeaModel(true)
    const onAskEmailModal = () => setAskEmailModal(true)

    const { data: bnbToUSDT } = usePrice({ from: siteConfig.NETWORK.SYMBOL })
    // let [color, setColor] = useState('#ffffff')

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `

    const startLoader = (number) => {
        switch (number + 1) {
            case 1:
                setLoading1(true)
                break
            case 2:
                setLoading2(true)
                break
            case 3:
                setLoading3(true)
                break
            case 4:
                setLoading4(true)
                break

            default:
                break
        }
    }

    const stopLoader = (number) => {
        switch (number + 1) {
            case 1:
                setLoading1(false)
                break
            case 2:
                setLoading2(false)
                break
            case 3:
                setLoading3(false)
                break
            case 4:
                setLoading4(false)
                break

            default:
                break
        }
    }

    const livePriceAPI = async () => {
        await axios({
            method: 'get',
            url: ' https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=ethereum,binancecoin,matic-network&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        }).then((response) => {
            // console.log(response.data)
            setPriceValue(response.data)
        })
    }

    const Razorpay = useRazorpay()
    const handlePayment = async (type) => {
        setEmailErrorMessage(false);
        console.log("selected value=", selectedInrAmount, selectedPlan, email)
        let value = 0
        // if (owner !== account)
        value = amount * siteConfig.DISPLAY_COST
        // const order = await createOrder(params); //  Create order on your backend
        const options = {
            key: siteConfig.razorpayKey, // Enter the Key ID generated from the Dashboard
            amount: selectedInrAmount , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: '',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                console.log(response.razorpay_payment_id)
                console.log(response.razorpay_order_id)
                console.log(response.razorpay_signature)
                setSuccessMintModal(true)
                sendEmail(email, selectedPlan)
                setLoading(false)
                setLoading1(false)
                setLoading2(false)
                setLoading3(false)
                setLoading4(false)
                // raorpayRes(amount, account, value)
            },
            prefill: {
                name: '',
                email: '',
                contact: '',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        }
        const rzp1 = new Razorpay(options)
        rzp1.on('payment.failed', function (response) {
            sendEmail(email, "FAILURE");
            console.log(response.error.code)
            console.log(response.error.description)
            console.log(response.error.source)
            console.log(response.error.step)
            console.log(response.error.reason)
            console.log(response.error.metadata.order_id)
            console.log(response.error.metadata.payment_id)
        })
        rzp1.open()
    }
    const sendEmail = (useremail, userselectPlan) => {
        fetch('http://intelora.co.in/api/rest/musicnftapi/sendmailservices.php', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    emailid: useremail,
		    planName: userselectPlan
		  })
		});
		console.log("Submit Success!!!!!", useremail);
      };
    const raorpayRes = async (amount, account, value) => {
        console.log(amount, account, 0)
        setLoading(true)
        setopenModal(false)
        setAskEmailModal(false)
        mint(amount, account, 0)
            .then((res) => {
                NotificationManager.success('Success', 'Success minted', 7000)
                onOpenModal()
                setLoading(false)
            })
            .catch((error) => {
                console.log('errrrrr', error)
                NotificationManager.warning('Warning', error?.message, 7000)
                setLoading(false)
            })
    }

    const handleMint = async (number) => {
        const selectedTier = tiers[tier]

        if (!tier || !selectedTier) {
            NotificationManager.error(
                'Please try again after some time! If this persists, please report the site owner about this problem!',
                'Something went wrong',
                7000,
            )
            return
        }

        resetProgress()

        setCryptoPaymentModalOpen(true)

        if (!account) {
            setopenModal(false)
            setCryptoPaymentModalOpen(false)
            NotificationManager.warning(
                'Please connect with the wallet of your choice',
                'Not connected',
                4000,
            )
            try {
                await connectWallet(true)
                // NotificationManager.info(
                //     'You may now retry the transaction',
                //     'Connected',
                //     7000,
                // )
                // stopLoader(number)
                setCryptoPaymentModalOpen(true)

                // Wait for fetching balance and other data
                await new Promise((resolve) => setTimeout(resolve, 3000))
            } catch {
                setCryptoPaymentModalOpen(true)
                setProgressError(
                    'Could not connect. Please retry the connection!',
                )
                return
            }
        }

        proceed()

        // startLoader(number)

        // let balance = await getAccBalance()
        let balance = balanceRef.current

        if (!balance) {
            setProgressError(
                'Something went wrong. Please retry the transaction!',
            )
            return
        }

        // const value = await priceBNB(selectedTier.costInUSD)
        let value = selectedTier.costInEther

        // let value = cost / bnbToUSDT

        // let value = bnbToUSDT * selectedTier.costInUSD
        // value = ethers.utils.parseEther(value.toString())

        // if (value._hex > balance) {

        if (+value > +balance._hex) {
            // NotificationManager.warning(
            //     'Please ensure that there is sufficient balance in your account',
            //     'Not enough balance',
            //     7000,
            // )

            let humanFriendlyValue = formatAmount(
                ethers.utils.formatEther(value.toString()),
                6,
            )

            // Wait for transitioning to the next point
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setProgressError(
                `Not enough balance. Please ensure that there is sufficient balance ` +
                    `(${humanFriendlyValue} ${siteConfig.NETWORK.SYMBOL}, plus gas fees) in your account.`,
            )
            stopLoader(number)
            return
        }

        try {
            await mintUsingTier(selectedTier.code, account, value)
        } catch (error) {
            const errMess = parseProviderErrorMessage(error)
            setProgressError(errMess)
            // NotificationManager.warning(errMess, 'Transaction Failed', 7000)
            stopLoader(number)
            return
        }

        NotificationManager.success('Success', 'Success minted', 7000)
        // onOpenModal()

        const lastTokenId = await getLastTokenId(selectedTier.code)

        setOpenSeaModel(lastTokenId)

        stopLoader(number)
        // cl
        proceed()
        setopenModal(false)
    }

    useEffect(() => {
        livePriceAPI()
    }, [])

    return (
        <section
            className='section-padding p-0'
            id='info'
            style={{ padding: 0 }}
        >
            <div className='container'>
                {/*&nbsp;&nbsp;&nbsp;<Modal open={cmodel} onClose={setCModal(false)} center styles={{ background: '#fffff' }}>
                    <div className="flex-center">
                        <div className="main-counter">
                            <div className="title">
                                <h2>Coming Soon</h2>
                            </div>
                            <div className="counter">
                                Launching on 31st August - 8.00pm IST
                            </div>
                            <div className="title" style={{ color: 'white', border: '2px white solid' }} >
                                {countdownTime && countdownTime.countdownDays + 'days : ' + countdownTime.countdownHours + 'hr : ' + countdownTime.countdownMinutes + 'min : ' + countdownTime.countdownSeconds + 'sec'}
                            </div>

                        </div>
                    </div>
                </Modal> */}
                <div className='row'>
                    <div className='col-lg-6  pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInLeft'
                            style={{ height: '100%' }}
                            animateOnce={true}
                        >
                            <div
                                className='info-gold'
                                style={{ height: '100%' }}
                            >
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img
                                        alt=''
                                        src='images/gold.png'
                                        className='info-back-img'
                                    />
                                    <div
                                        className='d-flex justify-content-start'
                                        style={{ height: '100%' }}
                                    >
                                        <div
                                            className='info-price'
                                            style={{ position: 'relative' }}
                                        >
                                            <img
                                                alt=''
                                                src='images/gold-img.png'
                                                className='info-price-value-img'
                                            />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '14px' }}>
                                                    <div
                                                        style={{
                                                            fontSize: '22px',
                                                            display: 'contents',
                                                        }}
                                                    >
                                                        100
                                                    </div>{' '}
                                                    - Doob Ja Rights Shares{' '}
                                                </p>
                                                <div className='info-goldline d-flex pb-3'>
                                                    <img
                                                        alt=''
                                                        src='images/goldline.svg'
                                                        style={{ zIndex: 3 }}
                                                    />
                                                </div>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Rights
                                                    partner of the song
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Royalty
                                                    partner certificate{' '}
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Exclusive
                                                    access to listen the song
                                                    before anyone else
                                                </p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {!loading1 && (
                                                    <button
                                                        className='gold-btn'
                                                        onClick={() => {
                                                            setTier('gold')
                                                            setopenModal(true)
                                                            setSelectedInrAmount(l1_inrCost)
                                                            setSelectedPlan("Gold")
                                                            // handleMint(
                                                            //     tiers['gold']
                                                            //         .code,
                                                            //     'gold',
                                                            // )
                                                        }}
                                                    >
                                                        Buy at {l1_inrCost} INR / {l1_usdCost} USD /
                                                        <br/>
                                                        {SHOW_COST_IN_CRYPTO &&
                                                            // bnbToUSDT &&
                                                            `  ${formatAmount(
                                                                ethers.utils.formatEther(
                                                                    tiers[
                                                                        'gold'
                                                                    ]
                                                                        .costInEther,
                                                                ),
                                                                // bnbToUSDT,
                                                                6,
                                                            )} ${
                                                                siteConfig
                                                                    .NETWORK
                                                                    .SYMBOL
                                                            }`}
                                                    </button>
                                                )}
                                                <ClipLoader
                                                    color={'#FFCA28'}
                                                    loading={loading1}
                                                    css={override}
                                                    size={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className='col-lg-6  pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInRight'
                            style={{ height: '100%' }}
                            animateOnce={true}
                        >
                            <div
                                className='info-gold'
                                style={{ height: '100%' }}
                            >
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img
                                        alt=''
                                        src='images/grey.png'
                                        className='info-back-img'
                                    />
                                    <div
                                        className='d-flex justify-content-start'
                                        style={{ height: '100%' }}
                                    >
                                        <div
                                            className='info-price'
                                            style={{ position: 'relative' }}
                                        >
                                            <img
                                                alt=''
                                                src='images/grey-img.png'
                                                className='info-price-value-img'
                                            />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '14px' }}>
                                                    <div
                                                        style={{
                                                            fontSize: '22px',
                                                            display: 'contents',
                                                        }}
                                                    >
                                                        400
                                                    </div>{' '}
                                                    - Doob Ja Rights Shares{' '}
                                                </p>
                                                <div className='info-goldline d-flex pb-3'>
                                                    <img
                                                        alt=''
                                                        src='images/greyline.svg'
                                                        style={{ zIndex: 3 }}
                                                    />
                                                </div>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Rights
                                                    partner with the song{' '}
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Royalty
                                                    Partner certificate
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Exclusive
                                                    Footage of song shooting
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Premium
                                                    In-kala community access
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Exclusive
                                                    access to listen the song
                                                    before anyone else{' '}
                                                </p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {!loading2 && (
                                                    <>
                                                        <button
                                                            className='grey-btn'
                                                            onClick={(e) => {
                                                                setTier(
                                                                    'platinum',
                                                                )
                                                                setopenModal(
                                                                    true,
                                                                )
                                                                setSelectedInrAmount(l2_inrCost)
                                                                setSelectedPlan("Platinum")
                                                                // handleMint(
                                                                //     tiers[
                                                                //         'platinum'
                                                                //     ].code,
                                                                //     'platinum',
                                                                // )
                                                            }}
                                                        >
                                                           Buy at {l2_inrCost} INR / {l2_usdCost} USD /
                                                            <br/>
                                                            {SHOW_COST_IN_CRYPTO &&
                                                                // bnbToUSDT &&
                                                                `  ${formatAmount(
                                                                    ethers.utils.formatEther(
                                                                        tiers[
                                                                            'platinum'
                                                                        ]
                                                                            .costInEther,
                                                                    ),
                                                                    6,
                                                                )} ${
                                                                    siteConfig
                                                                        .NETWORK
                                                                        .SYMBOL
                                                                }`}
                                                        </button>
                                                    </>
                                                )}
                                                <ClipLoader
                                                    color={'#CFCFCF'}
                                                    loading={loading2}
                                                    css={override}
                                                    size={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6  pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInLeft'
                            style={{ height: '100%' }}
                            animateOnce={true}
                        >
                            <div
                                className='info-gold'
                                style={{ height: '100%' }}
                            >
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img
                                        alt=''
                                        src='images/blue.png'
                                        className='info-back-img'
                                    />
                                    <div
                                        className='d-flex justify-content-start'
                                        style={{ height: '100%' }}
                                    >
                                        <div
                                            className='info-price'
                                            style={{ position: 'relative' }}
                                        >
                                            <img
                                                alt=''
                                                src='images/blue-img.png'
                                                className='info-price-value-img'
                                            />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '14px' }}>
                                                    <div
                                                        style={{
                                                            fontSize: '22px',
                                                            display: 'contents',
                                                        }}
                                                    >
                                                        1200
                                                    </div>{' '}
                                                    - Doob Ja Rights Shares{' '}
                                                </p>
                                                <div className='info-goldline d-flex pb-3'>
                                                    <img
                                                        alt=''
                                                        src='images/blueline.svg'
                                                        style={{ zIndex: 3 }}
                                                    />
                                                </div>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Rights
                                                    partner with the song{' '}
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Royalty
                                                    Partner certificate
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Exclusive
                                                    Footage of song shooting
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;Exclusive
                                                    community access of platform{' '}
                                                </p>
                                                <p style={{ fontSize: '11px' }}>
                                                    *&nbsp;&nbsp;&nbsp;E-signatures
                                                    and merchandise of Salim
                                                    Suleiman{' '}
                                                </p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {!loading3 && (
                                                    <button
                                                        className='blue-btn'
                                                        onClick={() => {
                                                            setTier('diamond')
                                                            setopenModal(true)
                                                            setSelectedInrAmount(l3_inrCost)
                                                            setSelectedPlan("Diamond")
                                                            // handleMint(
                                                            //     tiers['diamond']
                                                            //         .code,
                                                            //     'diamond',
                                                            // )
                                                        }}
                                                    >
                                                        Buy at {l3_inrCost} INR / {l3_usdCost} USD /
                                                        <br/>
                                                        {SHOW_COST_IN_CRYPTO &&
                                                            // bnbToUSDT &&
                                                            `  ${formatAmount(
                                                                ethers.utils.formatEther(
                                                                    tiers[
                                                                        'diamond'
                                                                    ]
                                                                        .costInEther,
                                                                ),
                                                                6,
                                                            )} ${
                                                                siteConfig
                                                                    .NETWORK
                                                                    .SYMBOL
                                                            }`}
                                                    </button>
                                                )}
                                                <ClipLoader
                                                    color={'#13A5F8'}
                                                    loading={loading3}
                                                    css={override}
                                                    size={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className='col-lg-6  pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInRight'
                            style={{ height: '100%' }}
                            animateOnce={true}
                        >
                            <div
                                className='info-gold'
                                style={{ height: '100%' }}
                            >
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img
                                        alt=''
                                        src='images/green.png'
                                        className='info-back-img'
                                    />
                                    <div
                                        className='d-flex justify-content-start'
                                        style={{ height: '100%' }}
                                    >
                                        <div
                                            className='info-price'
                                            style={{ position: 'relative' }}
                                        >
                                            <img
                                                alt=''
                                                src='images/green-img.png'
                                                className='info-price-value-img'
                                            />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <img
                                                    alt=''
                                                    src='images/exclusive.svg'
                                                    className='exclusive'
                                                />
                                                <p style={{ fontSize: '14px' }}>
                                                    <div
                                                        style={{
                                                            fontSize: '22px',
                                                            display: 'contents',
                                                        }}
                                                    >
                                                        1230
                                                    </div>{' '}
                                                    - Doob Ja Rights Shares{' '}
                                                </p>
                                                <div className='info-goldline d-flex pb-3'>
                                                    <img
                                                        alt=''
                                                        src='images/greenline.svg'
                                                        style={{ zIndex: 3 }}
                                                    />
                                                </div>
                                                <p style={{ fontSize: '14px' }}>
                                                    <b>
                                                        *&nbsp;&nbsp;&nbsp;Everything
                                                        in Diamond +
                                                    </b>
                                                </p>
                                                <p style={{ fontSize: '14px' }}>
                                                    <b>
                                                        *&nbsp;&nbsp;&nbsp;Meetup
                                                        and dinner with Salim
                                                        Suleiman
                                                    </b>
                                                </p>
                                                <p style={{ fontSize: '14px' }}>
                                                    <b>
                                                        *&nbsp;&nbsp;&nbsp;Exclusive
                                                        vinyl of Bhoomi 2022{' '}
                                                    </b>
                                                </p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {!loading4 && (
                                                    <button
                                                        className='green-btn'
                                                        onClick={() => {
                                                            setTier('royal')
                                                            setopenModal(true)
                                                            setSelectedInrAmount(l4_inrCost)
                                                            setSelectedPlan("Royal Partner")
                                                            // handleMint(
                                                            //     tiers['royal']
                                                            //         .code,
                                                            //     'royal',
                                                            // )
                                                        }}
                                                    >
                                                        Buy at {l4_inrCost} INR / {l4_usdCost} USD /
                                                        <br/>
                                                        {SHOW_COST_IN_CRYPTO &&
                                                            // bnbToUSDT &&
                                                            `  ${formatAmount(
                                                                ethers.utils.formatEther(
                                                                    tiers[
                                                                        'royal'
                                                                    ]
                                                                        .costInEther,
                                                                ),
                                                                6,
                                                            )} ${
                                                                siteConfig
                                                                    .NETWORK
                                                                    .SYMBOL
                                                            }`}
                                                    </button>
                                                )}
                                                <ClipLoader
                                                    color={'#00F0FF'}
                                                    loading={loading4}
                                                    css={override}
                                                    size={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>

            <Modal open={openModal} onClose={(e) => setopenModal(false)} center>
                <div className='main-counter'>
                    <form className='signup-modal'>
                        <h2>Choose Payment Type</h2>
                        <br />
                        <br />
                        <div className='form-group mt-1'>
                            <div className='row'>
                                <div className=' paymentBox'>
                                    <span
                                        className='custom-nav-btn'
                                        style={{
                                            color: '#fff',
                                            cursor: 'default',
                                        }}
                                        onClick={(e) => setAskEmailModal(true) } // handlePayment()}
                                    >
                                        Razorpay
                                    </span>
                                    {!loading && (
                                        <span
                                            className='custom-nav-btn'
                                            onClick={() =>
                                                handleMint(tiers[tier].code)
                                            }
                                            style={{ color: '#fff' }}
                                        >
                                            Crypto{' '}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal open={successMintModal} onClose={(e) => {
                    setAskEmailModal(false); 
                    setopenModal(false);
                    setEmailErrorMessage(false);
                    setSuccessMintModal(false);
                }} center>
                <div className='main-counter'>
                    <h2>Minting Done Succesfully!</h2>
                    <br />
                    <h4 style={{color:'#5ee55e'}}>  You will get further instruction over given email id.</h4>
                    <br />
                    <p>For Gmail users, sometime email instructions goes in <b style={{color:'#5ee55e'}}>Junk or SPAM</b> folder so please check those email as well.</p>
                </div>
            </Modal>
            <Modal open={askEmailModal} onClose={(e) => {
                    setAskEmailModal(false); 
                    setopenModal(false);
                    setEmailErrorMessage(false);
                }} center>
                <div className='main-counter'>
                    <form className='signup-modal'>
                        <h2>Please Enter Email Id to share Mint Detail</h2>
                        <br />
                        <br />
                        <div className='form-group mt-1'>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
                            {emailErrorMessage ?<div style={{color:'red'}}>Please enter valid email!</div>:''}
                            <p>&nbsp;</p>
                            <span
                                className='custom-nav-btn'
                                style={{
                                    color: '#fff',
                                    cursor: 'default',
                                }}
                                onClick={(e) => {
                                    if(validateEmail(email)){
                                        handlePayment();
                                    }

                                } } // handlePayment()}
                            >
                                Mint with given Email
                            </span>
                            <br />
                        </div>
                    </form>
                </div>
            </Modal>


            {/* <Modal open={playVideoModal} onClose={(e) => {
                    setPlayVideoModal(false); 
                    // setopenModal(false);
                   
                }} center>

        
                <div className='main-counter'>
                     <button
                            className='custom-nav-btn'
                                style={{
                                    color: '#fff',
                                    cursor: 'default',
                                }}
                                onClick={(e) => {setPlayVideoModal(true)
                                 } } 
                            >
                                Play Video
                            </button>
                <ReactPlayer open={playVideoModal} onClose={(e) => {
                    setPlayVideoModal(false); 
                    // setopenModal(false);
                   
                }}
          url="https://youtu.be/qUHt4hYHSa0"
          width="100%"
          height="calc(100vh - 100px)"
        />

                            </div>
            </Modal> */}

            <VerticalLinearStepper
                open={cryptoPaymentModalOpen}
                onClose={() => setCryptoPaymentModalOpen(false)}
                activeStep={progress}
                error={progressError}
                setActiveStep={setActiveStep}
            />
        </section>
    )
}

export default Infos
