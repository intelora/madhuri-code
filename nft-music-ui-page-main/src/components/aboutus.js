import { AnimationOnScroll } from "./AnimationOnScroll";
const AboutUs = () => {

    return (
        <section className="section-padding" id='about'>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className='d-flex align-items-baseline'>
                        <div className='line-grid'>
                            <img src="/images/leftgrid.svg" alt="" />
                        </div>
                        <div className="title">
                            <h2>About&nbsp;us</h2>
                        </div>
                        <div className='line-grid'>
                            <img src="/images/rightgrid.svg" alt="" />
                        </div>
                    </div>
                </AnimationOnScroll>
                <div className='d-flex align-items-center mt-5'>
                    <div className="heythere">
                        <img src="/images/heythere.svg" alt="" />
                    </div>
                    <div className="aboutus">
                        <div>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>We're Kalakaar.io, and we empower individuals to own a piece of their favourite artists' music, movie, art etc.</p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>Have you ever heard a song or seen a movie that changed your life? A piece of Art that was so incredible that it stayed with you forever. It made you feel joyous, made you happy, and maybe even taught you to be kind and generous. That is the power of Art. And artists can create this Art because of the love they get from their fans.
                                </p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>And we at KalaKaar.io elevate that experience for you. With us, you get to invest and support your favourite artist to create fantastic Art and earn money for yourself.
                                </p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>We at Kalakaar provide you with an opportunity to invest in your favourite artist. We provide NFTs(non-fungible tokens) that hold a percentage of streaming royalties, plus other perks like free access to concert tickets, merchandise discounts, VIP experiences and more!</p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default AboutUs