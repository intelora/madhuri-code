/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'



const Header = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { address, connect, disconnectWallet } = props
    return (
        
        <nav className='navbar navbar-expand-lg navbar-light nav-custom fixed-top nav-bg'>

      
       
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>
                    <img src='images/topLogo.svg' className='logo' />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarText'
                >
                    <ul className='navbar-nav nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-link'>
                                Songs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about'>
                                About Us
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#how'>
                                How it works
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#faq'>
                                FAQs
                            </a>
                        </li>
                        

                        <li className='nav-item'>
                            <a className='nav-link' href='#faq'>
                            

                            </a>
                        </li>
                        {/* {
              !address ?
                (<a className="custom-nav-btn" id="connect-wallet" onClick={connect}>
                  Connect Wallet
                </a>)
                :
                (<a className="custom-nav-btn" id="connect-wallet" onClick={disconnectWallet}>
                  Disconnect Wallet
                </a>)
            } */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
