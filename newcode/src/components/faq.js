import { AnimationOnScroll } from './AnimationOnScroll'

const Faq = () => {
    return (
        <section className='section-padding pt-0 overflow-hidden' id='faq'>
            <div className='container '>
                <div className='bottom-back'>
                    <img src='/images/topback.svg' alt='' />
                </div>
                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    style={{ overflow: 'hidden' }}
                    animateOnce={true}
                >
                    <img src='/images/band.svg' className='band' alt='' />
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    className={'faq-container'}
                    animateOnce={true}
                >
                    <div className='faq-border-wrap'>
                        <div className='faq'>
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>01</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#F64C71' }}>
                                            What is In-kala ? <br />
                                        </h3>
                                        <div className='faq-close'>
                                            <img
                                                src='/images/faqexit.svg'
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                    <p style={{ marginRight: '4rem' }}>
                                        In-kala is a platform that connects
                                        artists with their fans in a unique and
                                        special way. In-kala lets a fan own a
                                        piece of their favorite artist's track
                                        and earn royalties. Thus, empowering the
                                        artist and his fandom.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    className={'faq-container'}
                    animateOnce={true}
                >
                    <div className='faq-border-wrap'>
                        <div className='faq'>
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>02</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#F64C71' }}>
                                            How does it work? <br />
                                        </h3>
                                        <div className='faq-close'>
                                            <img
                                                src='/images/faqexit.svg'
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                    <p style={{ marginRight: '4rem' }}>
                                        It's pretty simple, Artists share a
                                        certain portion of their streaming
                                        royalties with their fans via NFT’s.{' '}
                                        <br />
                                        The fans can buy it from In-kala and
                                        partly own your favorite artist's track.
                                        The royalties get distributed straight
                                        in your wallet which holds the NFT.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    className={'faq-container'}
                    animateOnce={true}
                >
                    <div className='faq-border-wrap'>
                        <div className='faq'>
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>03</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#F64C71' }}>
                                            What do I get when I purchase an
                                            NFT?
                                            <br />
                                        </h3>
                                        <div className='faq-close'>
                                            <img
                                                src='/images/faqexit.svg'
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                    <p style={{ marginRight: '4rem' }}>
                                        Well, you get the percentage of
                                        royalties from the streaming services
                                        and the perks <br />
                                        provided by the artists. Apart from
                                        that. you also can use the artwork of
                                        the NFT for non-commercial purposes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    className={'faq-container'}
                    animateOnce={true}
                >
                    <div className='faq-border-wrap'>
                        <div className='faq'>
                            <div className='d-flex'>
                                <div className='faq-number'>
                                    <h1 style={{ color: '#9D96A8' }}>04</h1>
                                </div>
                                <div className='faq-content'>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: '#F64C71' }}>
                                            How do I pay on In-kala? <br />
                                        </h3>
                                        <div className='faq-close'>
                                            <img
                                                src='/images/faqexit.svg'
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                    <p>
                                        You can pay via Wallets, UPI, debit and
                                        credit cards and Crypto Wallets too.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Faq
