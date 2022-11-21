/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { NotificationManager } from "react-notifications";
// import { AnimationOnScroll } from "./AnimationOnScroll";";
import { AnimationOnScroll } from "../components/AnimationOnScroll";
import Header from '../components/profileHeader';

import './styles.css';
import { AppContext } from "../context/AppContext";
import Infos from "../components/infos";
import BreackDown from "../components/breakdown";
import Footer from "../components/footer";
import { Modal } from 'react-responsive-modal';

const Profile = () => {
  const {
    account,
    connectWallet,
    disconnectWallet,
    openSeaModal,
    setOpenSeaModel
  } = useContext(AppContext);

  const onCloseModal = () => setOpenSeaModel(false);
  const handleConnect = () => {
    connectWallet()
      .then((res) => {
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error.message, 3000);
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header address={account} connect={handleConnect} disconnectWallet={disconnectWallet} />
      <Modal open={openSeaModal} onClose={onCloseModal} center styles={{ background: '#4e4e4e' }}>
        <div className="flex-center">
          <div className="main-counter">
            <div className="title">
              <h2>Purchase done</h2>
            </div>
            <p>Have a look on it at&nbsp;
              <a
                href="https://testnets.opensea.io/account"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                OpenSea
              </a>
            </p>
          </div>
        </div>
      </Modal>
      <section className="section-padding" id='preview'>
        <div className="container">
          <div className="preview">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} className='pb-3'>
              <p className='text-left'>Song name</p>
              <h2 className="text-left">Unreleased track of Siddhu <br />
                Moosewalaft Afsana Khan
              </h2>
              <h1 className="profile-name">
                Jaandi Vaar
              </h1>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="preview-center">
              {/* <div className="d-flex justify-content-around preview-play align-items-center ">
                <p className="mb-0 ml-3">Preview</p>
                <div className="d-flex justify-content-around">
                  <div className="d-flex align-items-center play-btn-action  p-2" style={{ width: '40px' }}>
                    <img src="/images/prev.svg" alt="" />
                  </div>
                  <div className="d-flex align-items-center play-btn-action  p-2" style={{ width: '60px' }}>
                    <img src="/images/play.svg" alt="" />
                  </div>
                  <div className="d-flex align-items-center play-btn-action  p-2" style={{ width: '40px' }}>
                    <img src="/images/next.svg" alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
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
          <AnimationOnScroll animateIn="animate__fadeInUp" style={{ overflow: 'hidden' , marginTop: "50px" }} animateOnce={true}>
            <div className="profile-banner d-flex justify-content-center align-items-center">
              <h1>Royalty&nbsp;Partner's&nbsp;Card</h1>
            </div>
          </AnimationOnScroll>

        </div>
      </section>
      <Infos />
      <BreackDown />
      <Footer/>
    </>
  )
}

export default Profile;