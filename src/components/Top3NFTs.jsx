import React from 'react'

const Top3NFTs = () => {
  return (
    <>
      <div className=" mb-5">
        <div className=" container custom_container">
          <div className=" top_NFT_box">
            <h2 className=" sub_heading text-center">Top 3 NFTs</h2>
            <p className=" fw-semibold opacity_08 font-base top_NFT_para text-center mt-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className=" d-flex justify-content-center align-items-center mt-4 pt-3">
              <div>
                <p className=" font-sm fw-bold opacity_08 mb-0 d-block">
                  <span className=' me-3'>#</span> Antonym: GENESIS
                </p>
                <p className=" font-sm fw-bold opacity_08 mb-0 d-block">
                  <span className=' me-3'>#</span> CryptoPunks
                </p>
                <p className=" font-sm fw-bold opacity_08 mb-0 d-block">
                  <span className=' me-4'>#</span>Clone X - X Takashi Murakami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top3NFTs
