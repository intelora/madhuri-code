import { AnimationOnScroll } from "./AnimationOnScroll";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const Roadmap = () => {
    const {
        setOpenModal
    } = useContext(AppContext);

    const onOpenModal = () => setOpenModal(true);
    return (
        <section className="section-padding top-padding" id='roadmap'>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" className="pb-3" animateOnce={true}>
                   <Link to="/profile"><div  className="home-center">
                        {/* <img src="/images/main.png" alt="" /> */}
                    </div></Link>
                </AnimationOnScroll>

                <div className="roadmap">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='pb-5'>
                        <h2 className="text-center">Our First Drop: Unreleased Track of Sidhu Moose Wala Ft Afsana Khan</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" className="" animateOnce={true}>
                        <p className="text-center">This unreleased track sung by none other than the Legend: "Dil Da Ni Mada, tera Sidhu Moose Wala" featuring Afsana Khan is produced by the legendary duo Salim-Suliaman.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <p className="text-center">This track is in the memory of the Legend himself, and you get to hear it and support it before anyone else here at Kalakaar.io. So, don't miss out on the opportunity of a lifetime. Join our waitlist now and get ready to own a part of Sidhu Moose Wala's music!</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div onClick={onOpenModal} className='waitlist-btn'>
                            <img src="/images/button.png" alt="" />
                        </div>
                    </AnimationOnScroll>

                </div>
            </div>
        </section>
    );
}

export default Roadmap