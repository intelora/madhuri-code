/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect } from 'react'
import { NotificationManager } from 'react-notifications'
// import { AnimationOnScroll } from "./AnimationOnScroll";";
import { AnimationOnScroll } from '../components/AnimationOnScroll'
import Header from '../components/profileHeader'

import { Modal } from 'react-responsive-modal'
import BreackDown from '../components/breakdown'
import Footer from '../components/footer'
import Infos from '../components/infos'
import siteConfig from '../config/site.config'
import { AppContext } from '../context/AppContext'

import './styles.css'

const Profile = () => {
    const {
        account,
        connectWallet,
        disconnectWallet,
        openSeaModal,
        setOpenSeaModel,
    } = useContext(AppContext)

    const onCloseModal = () => setOpenSeaModel(false)
    const handleConnect = () => {
        connectWallet()
            .then((res) => {})
            .catch((error) => {
                NotificationManager.warning('Warning', error.message, 3000)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    var audio = new Audio("../audios/Doob_ja_promo_30sec.mp3")

    return (
        <>
            <Header
                address={account}
                connect={handleConnect}
                disconnectWallet={disconnectWallet}
            />
            <Modal
                open={openSeaModal ? true : false}
                onClose={onCloseModal}
                center
                styles={{ background: '#4e4e4e' }}
            >
                <div className='flex-center'>
                    <div className='main-counter'>
                        <div className='title'>
                            <h2>Purchase done</h2>
                        </div>
                        <p>
                            Have a look on it at&nbsp;
                            <a
                                href={`https://opensea.io/assets/matic/${siteConfig.CONTRACT_ADDRESS}/${openSeaModal}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mr-4'
                            >
                                OpenSea
                            </a>
                        </p>
                    </div>
                </div>
            </Modal>
            <section className='section-padding' id='preview'>
                <div className='container'>
                    <div className='preview'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInRight'
                            animateOnce={true}
                            className='pb-3'
                        >
                            <p className='text-left'>Song name</p>
                            <h1 className='profile-name'> Doob Ja </h1>
                            <h2 className='text-left'>
                                {' '}
                                Sunidhi Chauhan & King{' '}
                            </h2>
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll
                        animateIn='animate__fadeInLeft'
                        animateOnce={true}
                    >
                <div> 
                <img src='/images/pre-back.png' onClick={ () => audio.play() } />
                </div>
                <div className="d-flex justify-content-around">
                  <div className="d-flex align-items-center play-btn-action  p-2" style={{ width: '40px' }}>
                  <button onClick={ () => audio.play() }>
                   Play
                   </button>
                   <button onClick={ () => audio.pause() }>
                   Stop
                   </button>
                  </div>
                </div>

                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeInLeft'
                        animateOnce={true}
                    ></AnimationOnScroll>

                    <div className='d-flex justify-content-center pt-5'>
                        <div className='prev-description'>
                            <AnimationOnScroll
                                animateIn='animate__fadeInUp'
                                animateOnce={true}
                                className='pb-3'
                            >
                                <h5 className='text-left'>About Artist</h5>
                            </AnimationOnScroll>
                            <AnimationOnScroll
                                animateIn='animate__fadeInUp'
                                animateOnce={true}
                            >
                                <p className='text-left'>
                                    {' '}
                                    Doob Ja <br />
                                    Sunidhi Chauhan, King & Salim-Sulaiman
                                    <br />
                                    <br />
                                </p>
                                <p className='text-left'>
                                    You already know what it is, King is in the
                                    building! This time with one of the best
                                    female singers of the generation Sunidhi
                                    Chauhan and the legendary duo
                                    Salim-Sulaiman. Together they bring to you
                                    Doob Ja, an intense Rhythm and Blues (R&B)
                                    track written by King andSunidhi Chauhan.
                                    This once in a lifetime collaboration
                                    delivers to your ears, what may be called
                                    music but can be perfectly described as
                                    magic.{' '}
                                </p>
                                <p className='text-left'>
                                    {' '}
                                    In-kala brings to you the chance to invest
                                    in the magic created by Sunidhi Chauchan,
                                    King and Salim-Sulaiman.Join the waitlist
                                    now to be the first one to own a piece of
                                    Doob Ja!{' '}
                                </p>
                            </AnimationOnScroll>
                            <img
                                src='/images/listners.png'
                                alt='Listenrs'
                                className='noCSSImage'
                                style={{ height: '1.5rem' }}
                            />{' '}
                            &nbsp;
                            <img
                                src='/images/followers.png'
                                alt='Followers'
                                className='noCSSImage'
                                style={{ height: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        style={{ overflow: 'hidden', marginTop: '50px' }}
                        animateOnce={true}
                    >
                        <div className='profile-banner d-flex justify-content-center align-items-center'>
                            <h1>Doob Ja Rights shares</h1>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>

            
            
            <Infos />
            <BreackDown />
            <Footer />
        </>
    )
}

export default Profile
