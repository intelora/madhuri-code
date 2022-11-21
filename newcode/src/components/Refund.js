import { useEffect } from 'react'
import Footer from './footer'
import Header from './header'

const Refund = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />

            <section className='section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mt-5'>
                            <div className='privacy'>
                                <h4>Refund policy</h4>
                                <p>
                                    No refunds are applicable after purchase.
                                    You can sell your Rights shares on secondary
                                    markets like Open sea.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Refund
