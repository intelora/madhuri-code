/* eslint-disable jsx-a11y/alt-text */

import { Link } from 'react-router-dom'

/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
    return (
        <section
            className='main-section p-0'
            style={{ backgroundColor: '#ffffff' }}
            id='contact'
        >
            <div className='container'>
                <div className='row align-items-center gy-5'>
                    <img src='images/footer-top.svg' />
                    <div className='col-lg-12 order-xs-2 mt-1'>
                        <div className='main-box'>
                            <div className='title'>
                                <img
                                    src='images/topLogo.svg'
                                    style={{ width: '200px' }}
                                />
                            </div>
                            <div className='foot_pages'>
                                <ul>
                                    <li>
                                        <Link to={'/Terms'}>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/Privacy'}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/Refund'}>
                                            Refund policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/Contact'}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className='footer-des'>
                                <p
                                    className='pt-3 pb-3 mb-0'
                                    style={{
                                        color: '#292929',
                                        lineHeight: 1,
                                        fontSize: 12,
                                    }}
                                >
                                    {' '}
                                    All rights reserved 2021 ©
                                    http://in-kala.in/
                                </p>
                                <p
                                    className='pt-3 pb-3 mb-0'
                                    style={{
                                        color: '#292929',
                                        lineHeight: 1,
                                        fontSize: 12,
                                    }}
                                >
                                    Contact Us:{' '}
                                    <a
                                        href='mailto:support@in-kala.in'
                                        style={{ color: '#7A04EB' }}
                                    >
                                        support@in-kala.in
                                    </a>
                                </p>
                            </div> */}
                            <div className='social-btn'>
                                <ul>
                                    <li>
                                        <a href='/' target='_blank'>
                                            <img
                                                src='images/facebook-icon.png'
                                                alt='facebook-icon'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' target='_blank'>
                                            <img
                                                src='images/instagram-icon.png'
                                                alt='instagram-icon'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' target='_blank'>
                                            <img
                                                src='images/twitter-icon.png'
                                                alt='twitter-icon'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' target='_blank'>
                                            <img
                                                src='images/youtube-icon.png'
                                                alt='youtube-icon'
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 reserved'>
                        <p>
                            {' '}
                            All rights reserved 2021 ©
                            <a
                                href='mailto:support@in-kala.in'
                                style={{ color: '#7A04EB' }}
                            >
                                support@in-kala.in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
