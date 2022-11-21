/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
const Footer = () => {
  return (
    <section className="main-section p-0" id="contact">
      <div className="container">
        <div className="row align-items-center gy-5">
          <img src="images/footer-top.svg"/>
          <div className="col-lg-12 order-xs-2 mt-1">
            <div className="main-box">
              <div className="title">
                <img src="images/topLogo.svg" style={{ width: '200px' }} />
              </div>
              <div className="footer-des">
                <p className='pt-3 pb-3 mb-0'> All rights reserved 2021 © </p>
				<p className='pt-3 pb-3 mb-0'> Powered By Cloud King Digital Art Pvt Ltd ®</p>
                <p className='pt-3 pb-3 mb-0'>Contact Us: <a href="mailto:support@kalakaar.io">support@kalakaar.io</a></p>
              </div>
              <div className="social-btn">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/111983871626250/posts/pfbid0EYmXhrcPJkVTTPfFSa3UX152v7E733Jk5aCQkgQ4BpH7PLji4nRmeQEfcs6NfCLsl/" target="_blank">
                      <img src="images/facebook-icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/p/Chmo40cvQO6/?igshid=YmMyMTA2M2Y=" target="_blank">
                      <img src="images/instagram-icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/kalakaar_io/status/1561395727644823553?t=KXdTSlO0zPifFiyZHTI6kw&s=19" target="_blank">
                      <img src="images/twitter-icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/channel/UCnYa47J9d93l_9mMxBRzaqw" target="_blank">
                      <img src="images/youtube-icon.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
