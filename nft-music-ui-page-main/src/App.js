import React from 'react';
import Home from './containers/home';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './containers/profile';
import Marketingadminlogin from '../src/components/marketingadminlogin'
import WalletDetails from '../src/components/walletDetails'

function App() {
  return (
    <div className="main">
      <NotificationContainer />
      <Router>
        <Routes>
          <Route
            path="/nft-music/"
            element={<Home />} />
          <Route
            path="/nft-music/profile"
            element={<Profile />} />
          <Route
            path="/nft-music/marketingadmin"
            element={<Marketingadminlogin />} />


          <Route
            path="/nft-music/create-wallet"
            element={<WalletDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
