/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { AnimationOnScroll } from './AnimationOnScroll'

const HowWork = () => {
    const { setOpenModal } = useContext(AppContext)

    const onOpenModal = () => setOpenModal(true)

    return (
        <section className='section-padding' id='how' style={{ padding: 0 }}>
            <div className='container py-5' style={{ display: 'grid' }}>
                <div className='middle-back'>
                    <img src='/images/topback.svg' alt='' />
                </div>
                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                >
                    <div className='title'>
                        <h2>How does it work?</h2>
                    </div>
                </AnimationOnScroll>
                <div className='row howwork'>
                    <div className='col-lg-4 col-md-6 pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInLeft'
                            animateOnce={true}
                        >
                            <div className='module-border-wrap'>
                                <div className='module how1'>
                                    <h1>01</h1>
                                    <h3>Musicians share Royalty:</h3>
                                    <p>
                                        {' '}
                                        Artists share the ownership of their
                                        music with their fans via in-kala. This
                                        allows the fans to connect and support
                                        the artist. So, basically you own a
                                        piece of their music.
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className='col-lg-4 col-md-6 pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInUp'
                            animateOnce={true}
                        >
                            <div className='module-border-wrap'>
                                <div className='module how2'>
                                    <h1>02</h1>
                                    <h3>
                                        Fans Invest in <br />
                                        music:{' '}
                                    </h3>
                                    <p>
                                        {' '}
                                        Every supporter now gets a chance to
                                        partly own the track as NFT. Once you
                                        invest in the NFT, you are authorized to
                                        receive a percentage of streaming
                                        royalties plus many added benefits
                                        provided by the artist.{' '}
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className='col-lg-4 col-md-6 pt-5 how-padding'>
                        <AnimationOnScroll
                            animateIn='animate__fadeInRight'
                            animateOnce={true}
                        >
                            <div className='module-border-wrap'>
                                <div className='module how3'>
                                    <h1>03</h1>
                                    <h3>Everyone is Happy:</h3>
                                    <p>
                                        {' '}
                                        Well, you get to own a part of their
                                        music and support them. The artist gets
                                        to connect with their supporters in an
                                        innovative and meaningful way. When the
                                        artist is happy, Everyone is happy!{' '}
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    style={{ zIndex: 1000 }}
                    className='join-btn'
                    animateOnce={true}
                >
                    <div onClick={onOpenModal} className='waitlist-how-btn'>
                        <img
                            src='/images/button.png'
                            alt=''
                            style={{ width: '200px' }}
                        />
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default HowWork
