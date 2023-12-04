import React from 'react'
import heroCircle from "../assets/images/svg/hero_circle.svg";
const Hero = () => {
  return (
    <>
      <div className=" pb-5">
        <div className=" hero_bg_img position-relative">
          <img
            src={heroCircle}
            alt="hero_circle"
            className=" position-absolute hero_circle"
          />
          <div className=" container custom_container">
            <div className=" d-flex flex-column align-items-center justify-content-center min_h_hero">
              <h1 className=" ff_Playfair text-white fw-semibold font-xl mb-0 text-center">
                "Best New NFT to look out for"
              </h1>
              <h2 className=" fw-semibold font-lg text-white ff_Playfair">
                Which is Destroyer-of-fiat
              </h2>
            </div>
          </div>
        </div>
        <div className="Learn_more_setup d-flex align-items-center justify-content-center">
          <button className=" Learn_more_btn">Learn more</button>
        </div>
      </div>
    </>
  );
}

export default Hero
