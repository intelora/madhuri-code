import 'animate.css/animate.min.css'
import { useEffect } from 'react'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Marketingadminlogin from '../src/components/marketingadminlogin'
import WalletDetails from '../src/components/walletDetails'
import './App.css'
import Contact from './components/Contact'
import Marketingadmin from './components/marketingadmin'
import Privacy from './components/Privacy'
import Refund from './components/Refund'
import Terms from './components/Terms'
import Home from './containers/home'
import Profile from './containers/profile'

function App() {

    // useEffect(() =)
    return (
        <div className='main'>
            <NotificationContainer />

            <Router basename={process.env.REACT_APP_BASE_URL || '/'}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/privacy' element={<Privacy />} /> 
                    <Route path='/terms' element={<Terms />} /> 
                    <Route path='/contact' element={<Contact />} /> 
                    <Route path='/refund' element={<Refund />} /> 
                    <Route
                        path='/marketingadminlogin'
                        element={<Marketingadminlogin />}
                    />
                    <Route  path='/marketingadmin'  element={<Marketingadmin />} />

                    <Route path='/create-wallet' element={<WalletDetails />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
