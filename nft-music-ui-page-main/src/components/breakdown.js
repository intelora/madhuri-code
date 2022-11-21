import React from "react";
import { AnimationOnScroll } from "./AnimationOnScroll";
const BreackDown = () => {
    return (
        <section className="section-padding" id='breakdown'>
            <div className="container">
                <div className='d-flex justify-content-center'>
                    <div className='breakdown'>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <h2 className="text-left">Breakdown
                            </h2>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__fadeInUp" className='p-2' animateOnce={true}>
                            <div className="row break-back mt-3">
                                <div className="col-lg-4 col-md-6" >
                                    <p>
                                        Total tokens
                                    </p>
                                    <h1>10295</h1>
                                </div>
                                <div className="col-lg-4 col-md-6"  >
                                    <p>
                                        Total ownership offered
                                    </p>
                                    <h1>25%</h1>
                                </div>
                                <div className="col-lg-4 col-md-6" >
                                    <p>
                                        Amount raised
                                    </p>
                                    <h1>$21k</h1>
                                </div>
                            </div>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__fadeInUp" className='mt-5' animateOnce={true}>
                            <h2 className="text-left">About
                            </h2>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <div className='d-flex justify-content-between'>
                                <p>Edition</p>
                                <p >Unreleased Track of Sidhu <br /> Moose Wala ft Afsana khan</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Blockchain</p>
                                <p>Matic(Polygon) Mainnet</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Contact address</p>
                                <p >0xcBBBD...64107Dc652</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Legal</p>
                                <p>Read now</p>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" className='mt-5' animateOnce={true}>
                            <h2 className="text-left">Understanding the returns
                            </h2>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <p className="text-left"> If you have 1 Moosewala RPC card (0.03% ownership per RPC Card), for every 1M stream you will be making 3000 INR. if <br />
                                in the month of October it crosses 30M stream, You will be making 90,000 INR in that month. Hence it's not only crossing <br />your breakeven but also generating handsome returns on your investment along with other exquisite perks. </p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" className='mt-5' animateOnce={true}>
                            <h2 className="text-left">How does it work?
                            </h2>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <p className="text-left"> Every NFT sold on Kalakar has the Streaming Royalty Right's of the Artists. The percentage of Royalty depends on the tier <br />
                                of NFT. To chaim the royalties once they have ensued, the NFT must be in your wallet. <br /> </p>
                        </AnimationOnScroll>

                    </div>
                </div>
                <div className="row p-2" >
                    <div className="col-lg-4 col-md-6 pt-5 how-padding" >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <div className="row break-back-card mt-3">
                                <h3>Musicians sell</h3>
                                <p className='pt-3'>
                                    Artists use Kalakar as a platform to sell Streaming <br />
                                    Royalties to their Fans and give them access to <br />
                                    exclusive perks too.
                                </p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <div className="row break-back-card mt-3">
                                <h3>Fans Buy</h3>
                                <p className='pt-3'>
                                    Fans can buy the NFT that holds Streaming <br />
                                    Royalties on Kalakar by their favorite artists, and <br />
                                    support them.
                                </p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5 how-padding" >
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <div className="row break-back-card mt-3">
                                <h3>Empowering both</h3>
                                <p className='pt-3'>
                                    Fans get to empower the Artists, and the artist <br />
                                    gets to create a special experience for them. Thus <br />
                                    empowering both.
                                </p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default BreackDown