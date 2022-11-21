import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { AnimationOnScroll } from './AnimationOnScroll'

const Roadmap = () => {
    const { setOpenModal } = useContext(AppContext)

    const onOpenModal = () => setOpenModal(true)
    return (
        <section className='section-padding top-padding' id='roadmap'>
            <div className='container'>
                <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    className='pb-3'
                    animateOnce={true}
                >
                    <Link to='/profile'>
                        <div className='home-center'>
                            {/* <img src="/images/main.png" alt="" /> */}
                        </div>
                    </Link>
                </AnimationOnScroll>

                <div className='roadmap'>
                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        animateOnce={true}
                        className='pb-5'
                    >
                        <h2 className='text-center'>Creating Magic</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        className=''
                        animateOnce={true}
                    >
                        <p className='text-center'>
                            In-kala brings to you the chance to invest in the
                            magic created by Sunidhi Chauchan, King and
                            Salim-Sulaiman.
                        </p>
                    </AnimationOnScroll>

                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        className=''
                        animateOnce={true}
                    >
                        <p className='text-center'>
                            Join the waitlist now to be the first one to own a
                            piece of Doob Ja!
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        animateOnce={true}
                    >
                    {/* <div onClick={onOpenModal} className='waitlist-btn'>
                        <img src='/images/learnmore.png' alt='' />
                    </div> */}
                    <a href="/profile" className='waitlist-btn'>
                        <img src='/images/learnmore.png' alt='' />
                    </a>


                    
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default Roadmap
