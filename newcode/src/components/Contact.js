import { useEffect } from 'react'
import Mailto from 'react-mailto-link'
import Footer from './footer'
import Header from './header'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />

            <section className='section-padding'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 mt-5'>
                            <div className='contact'>
                                <img src='images/contact.png' />
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className='contact'>
                                <h2>Contact Us</h2>
                                <p>
                                    {' '}
                                    Cloud King Digital Art Pvt. Ltd, NO 98 GPA
                                    M/S Sai Priya Constructions, Electronic,
                                    Bangalore 560100
                                </p>
                                {/* <Link to={'mailto:support@in-kala.in'}> support@in-kala.in </Link> */}
                                <Mailto
                                    email='support@in-kala.in'
                                    obfuscated={true}
                                >
                                    <div>Email:- support@in-kala.in</div>
                                </Mailto>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact
