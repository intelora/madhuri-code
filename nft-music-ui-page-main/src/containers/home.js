/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { NotificationManager } from "react-notifications";
import Header from '../components/header';
import Footer from '../components/footer';
import Faq from "../components/faq";
import siteConfig from "../config/site.config";
import { mint, owner } from "../api/nft"
import { getShortAddress } from '../service/string'
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ScaleLoader";
import './styles.css';
import { Modal } from 'react-responsive-modal';
import { AppContext } from "../context/AppContext";
import AboutUs from "../components/aboutus";
import HowWork from "../components/howwork";
import Roadmap from "../components/roadmap";

const Home = () => {
  const {
    account,
    connectWallet,
    disconnectWallet,
    getAccBalance,
    openModal,
    setOpenModal
  } = useContext(AppContext);

  const [amount, setAmount] = useState(1);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const [errors, setErrors] = useState({
    email1: false,
    email: false,
    name: false,
    name1: false,
    mobile: false
  })

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const handleIncrease = () => {
    setAmount(Math.min(10, amount + 1))
  }
  const handleDecrease = () => {
    setAmount(Math.max(1, amount - 1))
  }
  const handleConnect = () => {
    connectWallet()
      .then((res) => {
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error.message, 3000);
        setLoading(false);
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleMint = async () => {
    setLoading(true);
    let balance = await getAccBalance();
    owner()
      .then((owner) => {
        let value = 0
        // if (owner !== account)
        value = amount * siteConfig.DISPLAY_COST;
        if (value > balance) {
          NotificationManager.warning('Warning', "Not enough balance", 3000);
          setLoading(false);
          return;
        }
        mint(amount, account, value)
          .then((res) => {
            NotificationManager.success('Success', "Success minted", 3000);
            onOpenModal();
            setLoading(false);
          })
          .catch((error) => {
            NotificationManager.warning('Warning', error?.message, 3000);
            setLoading(false);
          })
      })
  }

  const imageSlider = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  const handleChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    setErrors((errors) => ({
      ...errors,
      [event.target.name]: false
    }))
    if (event.target.name === 'email') {
      setErrors((errors) => ({
        ...errors,
        'email1': false
      }))
    }
    if (event.target.name === "name") {
      setErrors((errors) => ({
        ...errors,
        'name1': false
      }))
    }
  }

  const handleSubmit = () => {
    let tempErrors = errors;
    if (data.email.length === 0) {
      tempErrors.email1 = true;
    }
    if (data.name.length === 0) {
      tempErrors.name = true;
    }
    if (data.mobile.length === 0) {
      tempErrors.mobile = true;
    }

    if (tempErrors.name !== true) {
      if (data.name.length > 50) {
        tempErrors.name1 = true;
      }
    }

    if (tempErrors.email1 !== true) {
      if (!isValidEmail(data.email)) {
        tempErrors.email = true;
      }
    }


    setErrors({
      ...errors,
      ...tempErrors
    })

    if (!errors.email
      && !errors.name) {
		setOpenModal(false);
		fetch('https://intelora.co.in/api/rest/musicnftapi/customerenq_services.php', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			fullname: data.name,
			emailid: data.email,
			cstatus: 'ENQ',
			contactno: data.mobile
		  })
		});
		console.log("Submit Success!!!!!");
    }
  }

  return (
    <>
      <Header address={account} connect={handleConnect} disconnectWallet={disconnectWallet} />
      <Modal open={openModal} onClose={onCloseModal} center styles={{ background: '#4e4e4e' }}>
        <div className="flex-center">
          <div className="main-counter">
            <div className="title">
              <h2>Join Us</h2>
            </div>
            <div className="counter">
              <div className="prefix">Email</div>
              <input className="email-input" type="text" name="email" value={data.email} onChange={handleChange} />
              {
                errors.email &&
                <span className="validation">Email is invalid </span>
              }
              {
                errors.email1 &&
                <span className="validation">Email field is Required </span>
              }
            </div>
            <div className="counter">
              <div className="prefix">Name</div>
              <input className="email-input" type="text" name="name" value={data.name} onChange={handleChange} />
              {
                errors.name1 &&
                <span className="validation">Minimum 50 symbols</span>
              }

              {
                errors.name &&
                <span className="validation">Name field is Required </span>
              }
            </div>
            <div className="counter">
              <div className="prefix">Mobile</div>
              <div className="mobile-input">
                <div className="plus-sign">+</div>
                <input className="email-input" type="number" name="mobile" value={data.mobile} onChange={handleChange} />
                {
                  errors.mobile &&
                  <span className="validation">Mobile field is Required </span>
                }
              </div>
            </div>s
            <button onClick={handleSubmit} className="send-query">
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <section className="main-section bottom-padding" id="mint">
        <div className="container">
          <div className="row align-items-center gy-5 mt-3">
            <div className="top-back">
              <img src="/images/topback.svg" alt="" />
            </div>

            <div className="col-lg-12" style={{ zIndex: '1' }}>
              <div className="row align-items-center py-5">
                <div className="col-lg-7">
                  <div className="title pl-10" >
                    <h1>Own the <br /><span style={{ color: '#7A04EB' }}>Music</span>  You <br />Listen To!</h1>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="text-center main-gif" style={{ position: 'relative' }}>
                    <img src="/images/musicbar.svg" className="rotate" alt="" />
                    <div className="d-flex justify-content-around preview-top align-items-center ">
                      <p className="mb-0 ml-3">PREVIOUS</p>
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
                      <p className="mb-0 ml-3">NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Roadmap />
      <AboutUs />
      <HowWork />
      <Faq />
      <Footer />
    </>
  )
}

export default Home;