import React from "react";
import { ServicesData } from "./common/Helper";

const MostAnticipated = () => {
  return (
    <div className=" my-3">
      <div className=" container custom_container">
        <h2 className=" sub_heading text-center mb-0 ">
          Most Anticipated NFT'S of 2022
        </h2>
        <div className="row justify-content-center mt-md-5">
          {ServicesData.map((about) => {
            return (
              <div key={about.id} className="col-sm-9 col-md-6 col-xl-4">
                <div className=" d-flex justify-content-center mb-0">
                  <p className=" font-base bg-black text-white d-inline-block Rating_btn mb-0">
                    {about.Rating}
                  </p>
                </div>
                <div className=" Most_Anticipated_card  d-flex justify-content-center flex-column align-items-center">
                  <img
                    src={about.cardImg}
                    alt="cardImg"
                    height={240}
                    width={295}
                  />
                  <h4 className=" fw-bold font-sm text-center mt-4 mb-0 Most_Anticipated_heading">
                    {about.heading}
                  </h4>
                  <p className=" font-base fw-semibold opacity_08 mb-0 text-center Most_Anticipated_para">
                    {about.para}
                  </p>{" "}
                  <button className="best_NFT_btn">Learn more</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MostAnticipated;
