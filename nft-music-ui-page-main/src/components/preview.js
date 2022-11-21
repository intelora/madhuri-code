import { AnimationOnScroll } from "./AnimationOnScroll";
const Preview = () => {
    return (
        <section className="section-padding" id='preview'>
            <div className="container">
                <div className="preview">
                    <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} className='pb-3'>
                        <p className='text-left'>Song name</p>
                        <h2 className="text-left">Unreleased track of Siddhu <br />
                            Moosewalaft Afsana Khan
                        </h2>
                    </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="preview-center">
                        <img src="/images/pre-back.png" alt="" />
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="preview-play">
                        <img src="/images/pre-btn.svg" alt="" />
                    </div>
                </AnimationOnScroll>

                <div className='d-flex justify-content-center pt-5'>
                    <div className="prev-description">
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='pb-3'>
                            <h5 className="text-left">About Artist</h5>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <p className="text-left"> This track by the Late Sidhu Moose wala and Afsana Khan is pure magic to ears. The sound of this track will imprint on <br />
                                your soul and memory forever. We pay our homage to Sidhu Moose wala the GOAT of Punjabi Rap and Music by bringing <br />
                                this track to his fans in a legendary way. They get to be part of History by partially owning a track of the Legend Sidhu <br />
                                Moosewala himself. </p>
                        </AnimationOnScroll>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Preview