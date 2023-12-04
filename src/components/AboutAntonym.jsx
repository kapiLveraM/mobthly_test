import React from 'react'
import features from "../assets/images/png/GENESIS.png";
import startIcon from "../assets/images/svg/Star_icon.svg";
import { BestNftIcon } from "./common/Icons";

const AboutAntonym = () => {
    return (
      <div className=" py-md-5 ">
        <div className="container custom_container">
          <h3 className=" font-lg fw-bold mb-0">About Antonym: GENESIS</h3>
          <p className=" fw-semibold font-base opacity_08 About_antonym_para mt-2 mt-md-4 mb-2">
            Antonym is a phygital lifestyle brand bridging the gap between
            digital collectibles and physical designer goods. Antonym: Genesis
            is a Phygital collection of 8,888 NFTs. Each holder is eligible to
            redeem a limited-edition, designer art toy.
          </p>
          <p className=" fw-semibold font-base opacity_08 About_antonym_para mb-0">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <h3 className=" font-lg fw-bold mb-0 mt-5 pt-1">Features</h3>
          <ul className="mb-0 ps-4 mt-3">
            <li className=" list_style_disc mt-3 fw-semibold font-base opacity_08 About_antonym_para">
              Antonym is a phygital lifestyle brand bridging the gap between
              digital collectibles and physical designer goods. Antonym: Genesis
              is a Phygital collection of 8,888 NFTs. Each holder is eligible to
              redeem a limited-edition, designer art toy.
            </li>
            <li className=" list_style_disc mt-3 fw-semibold font-base opacity_08 About_antonym_para">
              Antonym is a phygital lifestyle brand bridging the gap between
              digital collectibles and physical designer goods. Antonym: Genesis
              is a Phygital collection of 8,888 NFTs. Each holder is eligible to
              redeem a limited-edition, designer art toy.
            </li>
            <li className=" list_style_disc mt-3 fw-semibold font-base opacity_08 About_antonym_para">
              Antonym is a phygital lifestyle brand bridging the gap between
              digital collectibles and physical designer goods. Antonym: Genesis
              is a Phygital collection of 8,888 NFTs. Each holder is eligible to
              redeem a limited-edition, designer art toy.
            </li>
            <li className=" list_style_disc mt-3 fw-semibold font-base opacity_08 About_antonym_para">
              Antonym is a phygital lifestyle brand bridging the gap between
              digital collectibles and physical designer goods. Antonym: Genesis
              is a Phygital collection of 8,888 NFTs. Each holder is eligible to
              redeem a limited-edition, designer art toy.
            </li>
          </ul>
          <div className="features_box">
            <div className="row justify-content-center">
              <div className=" col-lg-4">
                <div className="features_img mx-auto">
                  <img src={features} alt="features" className=" w-100" />
                </div>
              </div>
              <div className=" col-lg-4 d-flex flex-column align-items-center justify-content-between">
                <div>
                  <img src={startIcon} alt="startIcon" />
                  <p className=" font-sm fw-normal opacity_06 mt-1 text-center mb-0">
                    4.8
                  </p>
                </div>
                <div>
                  <button className="best_NFT_btn">Get a free quote</button>
                </div>
              </div>
              <div className=" col-lg-4">
                <h3 className=" fw-bold font-md text-center text-lg-start mt-4">Antonym: GENESIS</h3>
                <div className=" d-flex justify-content-between w-100 mt-4 mt-1">
                  <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                    Items
                  </p>
                  <p className=" fw-normal font-sm text-black mb-0">4.3k</p>
                </div>
                <div className=" d-flex justify-content-between w-100 mt-3">
                  <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                    Owners
                  </p>
                  <p className=" fw-normal font-sm text-black mb-0">3.6k</p>
                </div>
                <div className=" d-flex justify-content-between w-100 mt-3">
                  <p className=" fw-normal font-sm text-black opacity_06 mb-0 ">
                    Floor price
                  </p>
                  <p className=" fw-normal font-sm text-black mb-0 ">
                    <span className="BestNftIcon d-inline-block me-2">
                      <BestNftIcon />
                    </span>
                    1
                  </p>
                </div>
                <div className=" d-flex justify-content-between w-100 mt-3">
                  <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                    Volume trade
                  </p>
                  <p className=" fw-normal font-sm text-black mb-0 ">1.6k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutAntonym
