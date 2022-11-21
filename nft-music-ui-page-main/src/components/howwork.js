/* eslint-disable jsx-a11y/alt-text */
import { AnimationOnScroll } from "./AnimationOnScroll";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const HowWork = () => {
    const {
        setOpenModal
    } = useContext(AppContext);

    const onOpenModal = () => setOpenModal(true);

    return (
        <section className="section-padding" id='how' style={{ padding: 0 }}>
            <div className="container py-5" style={{display: 'grid'}}>
                <div className="middle-back">
                    <img src="/images/topback.svg" alt="" />
                </div>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="title">
                        <h2>How does it work?</h2>
                    </div>
                </AnimationOnScroll>
                <div className="row howwork">
                    <div className="col-lg-4 col-md-6 pt-5 how-padding" >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <div className="module-border-wrap">
                                <div className="module how1">
                                    <h1>01</h1>
                                    <h3>Artists Share <br /> Royalties:</h3>
                                    <p>
                                        Artists share the ownership of their Art with their fans via Kalakaar.<br />
										This allows the fans to connect and support their favourite artist. <br />
										Thus, allowing them to own a piece of their craft.<br />
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <div className="module-border-wrap">
                                <div className="module how2">
                                    <h1>02</h1>
                                    <h3>Fans Invest in <br /> the Art:</h3>
                                    <p>
                                        Every supporter now gets a <br />
                                        chance to partly own the art. <br />
                                        Once you invest in the NFT, <br />
                                        you are authorized to receive a <br />
                                        percentage of streaming royalties<br />
                                        plus many added benefits<br />
                                        provided by the artists.<br />
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5 how-padding" >
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <div className="module-border-wrap">
                                <div className="module how3">
                                    <h1>03</h1>
                                    <h3>Everyone is Happy:<br /></h3>
                                    <p>You get to own a piece of their Art, <br /> and they connect with you in a deeper and more meaningful way.<br />
									When the artist is happy, everyone is Happy!<br />
									&nbsp;<br />
                                    </p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll animateIn="animate__fadeInUp" style={{zIndex: 1000}} className="join-btn" animateOnce={true}>
                    <div onClick={onOpenModal} className='waitlist-how-btn'>
                        <img src="/images/button.png" alt="" style={{width: '200px'}}/>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
}

export default HowWork
