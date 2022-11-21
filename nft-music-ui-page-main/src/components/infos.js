/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { AnimationOnScroll } from "./AnimationOnScroll";
import { AppContext } from "../context/AppContext";
import React,{ useState, useEffect, useContext } from "react";
import { mint, owner } from "../api/nft"
import siteConfig from "../config/site.config";
import { NotificationManager } from "react-notifications";
import ClipLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
import './styles.css';
import { Modal } from 'react-responsive-modal';
import Roadmap from "../components/roadmap";
import useRazorpay from "react-razorpay";
import axios from "axios";
const Infos = () => {

    const {
        account,
        getAccBalance,
        setOpenSeaModel
    } = useContext(AppContext);

    let [loading1, setLoading1] = useState(false);
    let [loading2, setLoading2] = useState(false);
    let [loading3, setLoading3] = useState(false);
    let [loading4, setLoading4] = useState(false);
    const [cmodel, setCModal] = useState(false);
    const [openModal, setopenModal] = useState(false)
    const [priceValue, setPriceValue] = useState('')
    const [amount, setAmount] = useState(1);
    let [loading, setLoading] = useState(false);

    const onOpenModal = () => setOpenSeaModel(true);
    let [color, setColor] = useState("#ffffff");

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;

    const setFalse = (number) => {
        switch (number) {
            case 1:
                setLoading1(false);
                break;
            case 2:
                setLoading2(false);
                break;
            case 3:
                setLoading3(false);
                break;
            case 4:
                setLoading4(false);
                break;

            default:
                break;
        }
    }

    const livePriceAPI = async () => {
        await axios({
            method: 'get',
            url: ' https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=ethereum,binancecoin,matic-network&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        })
            .then(response => {
    
                console.log(response.data);
                setPriceValue(response.data)
            })
    }

    

    const Razorpay = useRazorpay();
    const handlePayment = async (type) => {
      let value = 0
        // if (owner !== account)
        value = amount * siteConfig.DISPLAY_COST;
        // const order = await createOrder(params); //  Create order on your backend
            const options = {
                key: siteConfig.razorpayKey, // Enter the Key ID generated from the Dashboard
                amount:  6000*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: '',
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                    console.log(response.razorpay_payment_id);
                    console.log(response.razorpay_order_id);
                    console.log(response.razorpay_signature);
                    raorpayRes(amount, account, value)
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: "",
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
            });
            rzp1.open();
        
       
    };

    const raorpayRes = async(amount, account, value) => {
      console.log(amount, account, 0)
      setLoading(true);
      setopenModal(false)
      mint(amount, account, 0)
      .then((res) => {
        NotificationManager.success('Success', "Success minted", 3000);
        onOpenModal();
        setLoading(false);
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error?.message, 3000);
        setLoading(false);
      })
  
    }


    const handleMint = async (number) => {
        switch (number) {
            case 1:
                setLoading1(true);
                break;
            case 2:
                setLoading2(true);
                break;
            case 3:
                setLoading3(true);
                break;
            case 4:
                setLoading4(true);
                break;

            default:
                break;
        }

        let balance = await getAccBalance();
        owner()
            .then((owner) => {
                let value = 0
                // if (owner !== account)
                value = number * siteConfig.DISPLAY_COST;
                if (value > balance) {
                    NotificationManager.warning('Warning', "Not enough balance", 3000);
                    setFalse(number);
                    return;
                }
                mint(1, account, value)
                    .then((res) => {
                        NotificationManager.success('Success', "Success minted", 3000);
                        onOpenModal();
                        setFalse(number);

                    })
                    .catch((error) => {
                        NotificationManager.warning('Warning', error?.message, 3000);
                        setFalse(number);
                    })
            })
    }

    // const modelOpen = () => {
    //     setCModal(true);
    // }

    // const [expiryTime, setExpiryTime] = useState("31 Aug 2022 20:00:00");
    // const [countdownTime, setCountdownTime] = useState({
    //     countdownDays: "",
    //     countdownHours: "",
    //     countdownlMinutes: "",
    //     countdownSeconds: "",
    // });

    // const countdownTimer = () => {
    //     const timeInterval = setInterval(() => {
    //         const countdownDateTime = new Date(expiryTime).getTime();
    //         const currentTime = new Date().getTime();
    //         const remainingDayTime = countdownDateTime - currentTime;
    //         const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
    //         const totalHours = Math.floor(
    //             (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //         );
    //         const totalMinutes = Math.floor(
    //             (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
    //         );
    //         const totalSeconds = Math.floor(
    //             (remainingDayTime % (1000 * 60)) / 1000
    //         );

    //         const runningCountdownTime = {
    //             countdownDays: totalDays,
    //             countdownHours: totalHours,
    //             countdownMinutes: totalMinutes,
    //             countdownSeconds: totalSeconds,
    //         };

    //         setCountdownTime(runningCountdownTime);
    //         console.log(countdownTime, "countdown inside modal")


    //         if (remainingDayTime < 0) {
    //             clearInterval(timeInterval);
    //             setExpiryTime(false);
    //         }
    //     }, 1000);
    // };

    useEffect(() => {
        livePriceAPI()

        // cmodel && countdownTimer();
    },[]);


    return (
        <section className="section-padding p-0" id='info' style={{ padding: 0 }}>
            <div className="container">
                {/* <Modal open={cmodel} onClose={setCModal(false)} center styles={{ background: '#fffff' }}>
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
                <div className="row">
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/gold.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/gold-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.0015%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/gold-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/goldline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading1 &&
                                                     <button onClick={() => setopenModal(true)} className='gold-btn'>
                                                         Buy at 2000INR/25USD
                                                     </button>
                                                }
                                                <ClipLoader color={"#FFCA28"} loading={loading1} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInRight" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/grey.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/grey-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.005%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/grey-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/greyline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading2 &&
                                                    <>
                                                        <button onClick={e => setopenModal(true)} className='grey-btn'>
                                                            Buy at 6000INR/{siteConfig.btnUsd1}USD
                                                        </button>
                                                    </>
                                                }
                                                <ClipLoader color={"#CFCFCF"} loading={loading2} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/blue.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/blue-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.01%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/blue-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/blueline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>
                                                <p style={{ fontSize: '10px' }}>Moosewala Merchandise</p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading3 &&
                                                    <button onClick={() => handleMint(3)} className='blue-btn'>
                                                        Buy at 10000INR/125USD
                                                    </button> 
                                                }
                                                <ClipLoader color={"#13A5F8"} loading={loading3} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInRight" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/green.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/green-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <img src="images/exclusive.svg" className="exclusive" />
                                                <p style={{ fontSize: '15px' }}>0.03%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/green-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/greenline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>
                                                <p style={{ fontSize: '10px' }}>Moosewala Merchandise</p>
                                                <p style={{ fontSize: '10px' }}>Meetup and concert access with <br />
                                                    Afsana Khan and Salim and Suleiman</p>
                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading4 &&
                                                    <button onClick={() => handleMint(4)} className='green-btn'>
                                                        Buy at 23600INR/295USD
                                                    </button> 
                                                }
                                                <ClipLoader color={"#00F0FF"} loading={loading4} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>


            <Modal open={openModal} onClose={e => setopenModal(false)} center>
                <div className="main-counter">
                    <form className="signup-modal">
                        <h2>Choose Payment Type</h2>
                        <br />
                        <br />
                        <div className="form-group mt-1">
                            <div className="row">
                                <div className=" paymentBox">
                                    <span className="custom-nav-btn" style={{ color: '#fff' }} onClick={e => handlePayment()}>
                                        Pay using Razorpay
                                    </span>                                
                                    {
                                        !loading &&
                                        <span className="custom-nav-btn" onClick={() => handleMint(2)}
                                            style={{ color: '#fff' }}>
                                            Crypto
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </section>
    );
}

export default Infos
