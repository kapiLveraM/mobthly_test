import React from 'react'
import { ProductData } from "./common/Helper";
import { BestNftIcon } from './common/Icons';

const BestNft = () => {
  return (
    <div className=" my-5 pt-5 py-md-5">
      <div className=" container custom_container mt-5 pt-4">
        <h2 className=" sub_heading text-center">Best NFT's Of 2022</h2>
        <div className="row justify-content-center mt-md-5 pt-lg-5">
          {ProductData.map((about) => {
            return (
              <div key={about.id} className="col-sm-9 col-md-6 col-xl-4">
                <div className=" d-flex justify-content-center mb-0">
                  <p className=" font-base bg-black text-white d-inline-block Rating_btn mb-0">
                    {about.Rating}
                  </p>
                </div>
                <div className=" best_NFT_card  d-flex justify-content-center flex-column align-items-center">
                  <img
                    src={about.cardImg}
                    alt="cardImg"
                    height={191}
                    width={191}
                  />
                  <h4 className=" fw-bold font-md text-center mt-4 mb-0">
                    {about.heading}
                  </h4>
                  <div className=" d-flex justify-content-between w-100">
                    <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                      {about.Items1}
                    </p>
                    <p className=" fw-normal font-sm text-black">
                      {about.value1}
                    </p>
                  </div>
                  <div className=" d-flex justify-content-between w-100">
                    <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                      {about.Items2}
                    </p>
                    <p className=" fw-normal font-sm text-black">
                      {about.value2}
                    </p>
                  </div>
                  <div className=" d-flex justify-content-between w-100">
                    <p className=" fw-normal font-sm text-black opacity_06 mb-0">
                      {about.Items3}
                    </p>
                    <p className=" fw-normal font-sm text-black mb-0 ">
                      <span className="BestNftIcon d-inline-block me-2">
                        <BestNftIcon />
                      </span>
                      {about.value3}
                    </p>
                  </div>
                  <button className="best_NFT_btn">Learn more</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestNft
