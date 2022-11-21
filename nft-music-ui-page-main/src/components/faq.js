import { AnimationOnScroll } from "./AnimationOnScroll";

const Faq = () => {

    return (
        <section className="section-padding pt-0 overflow-hidden"  id='faq'>
            <div className="container ">
                <div className="bottom-back">
                    <img src="/images/topback.svg" alt="" />
                </div>
                <AnimationOnScroll animateIn="animate__fadeInUp" style={{overflow: 'hidden'}} animateOnce={true}>
                    <img src="/images/band.svg" className='band' alt="" />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" className={"faq-container"} animateOnce={true}>
                    <div className="faq-border-wrap">
                        <div className="faq">
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>01</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#7A04EB' }}>What is Kalakaar? <br /></h3>
                                        <div className='faq-close'>
                                            <img src="/images/faqexit.svg" alt="" />
                                        </div>
                                    </div>
                                    <p>
                                        Kalakaar is a platform that connects artists with their fans in a unique and special way.<br/>
                                        Kalakaar lets a fan own a piece of their favourite artist's art and earn royalties. We are empowering the artist and their fandom.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp"  className={"faq-container"} animateOnce={true}>
                    <div className="faq-border-wrap">
                        <div className="faq">
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>02</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#7A04EB' }}>How does it work? <br /></h3>
                                        <div className='faq-close'>
                                            <img src="/images/faqexit.svg" alt="" />
                                        </div>
                                    </div>
                                    <p>
                                        It's pretty simple, Artists share a certain portion of their streaming royalties with their fans via NFT's.<br />
                                        The fans can buy it from Kalakaar and partly own their favourite artists' art. The royalties get distributed straight in your wallet which holds the NFT.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp"  className={"faq-container"} animateOnce={true}>
                    <div className="faq-border-wrap">
                        <div className="faq">
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>03</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#7A04EB' }}>What do I get when I purchase an NFT?<br /></h3>
                                        <div className='faq-close'>
                                            <img src="/images/faqexit.svg" alt="" />
                                        </div>
                                    </div>
                                    <p>
                                        Well, you get the percentage of royalties from the streaming services and the perks <br />
                                        provided by the artists. Apart from that, you also can use the artwork of the NFT for <br />
                                        non-commercial purposes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp"  className={"faq-container"} animateOnce={true}>
                    <div className="faq-border-wrap">
                        <div className="faq">
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>04</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#7A04EB' }}>How do I pay on Kalakaar? <br /></h3>
                                        <div className='faq-close'>
                                            <img src="/images/faqexit.svg" alt="" />
                                        </div>
                                    </div>
                                    <p>
                                        You can pay via multiple methods and Crypto too. We support multiple wallets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
}

export default Faq