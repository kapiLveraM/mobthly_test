
import React, { useState } from "react";
import logo from "../assets/images/svg/Rectangle 40.svg";
import { CrossIcon, MenuIcon , SearchIcon } from "./common/Icons";

const Header = () => {
const [NavShow, setNavShow] = useState(true);
function clickshow() {
  setNavShow(!NavShow);
}
if (window.innerWidth && NavShow) {
  document.body.classList.remove("overflow-y-hidden");
} else if (!NavShow) {
  document.body.classList.add("overflow-y-hidden");
}
  return (
    <div>
      <div className="py-sm-2 position-relative nav_bottom_border overflow-hidden">
        <div className=" container custom_container ">
          <div>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="#"
                  className=" position-relative index_20 logo_max_width"
                >
                  <img
                    src={logo}
                    alt="logo nav"
                    className="w-100 pointer-event"
                  />
                </a>
                <div className="d-flex align-items-center justify-content-between">
                  <ul
                    className={`nav_show d-flex flex-xl-row  flex-column align-items-center mb-0 p-0 flex-row z-3
                      ${NavShow ? "" : "show "}`}
                  >
                    <form className=" d-flex align-items-center Search_bar me-xl-5 mb-4 mb-xl-0">
                      <SearchIcon />
                      <input
                        type="text"
                        className="placeholder_nav ms-2 color_black opacity_06 font-xs fw-normal"
                        placeholder="Search..."
                      />
                    </form>
                    <li>
                      <a
                        href="#home"
                        onClick={clickshow}
                        className="font-xs fw_medium mx-0 mx-xl-4 color_black opacity_06 hover_line text-decoration-none position-relative"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-us"
                        onClick={clickshow}
                        className="font-xs fw_medium mx-0 mx-xl-4 color_black opacity_06 hover_line text-decoration-none position-relative "
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="#why-choose-us"
                        onClick={clickshow}
                        className="font-xs fw_medium mx-0 mx-xl-4 color_black opacity_06 hover_line text-decoration-none position-relative"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#why-choose-us"
                        onClick={clickshow}
                        className="font-xs fw_medium ms-xl-4 me-xl-5 color_black opacity_06 hover_line text-decoration-none position-relative"
                      >
                        Activity
                      </a>
                    </li>
                    <li>
                      <div className="d-block d-md-none ">
                        <div className="d-flex align-items-center">
                          <button className="btn_nav" href="#Subscribe">
                            <span className="name-descripeion position-relative">
                              SIGN IN
                            </span>
                            <span className="btn-icon"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="d-none d-md-block">
                    <div className="d-flex align-items-center">
                      <button
                        className="btn_nav"
                        href="#Contact"
                        onClick={clickshow}
                      >
                        <span className="name-descripeion position-relative">
                          SIGN IN
                        </span>
                        <span className="btn-icon"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" z-3 d-xl-none position-relative">
                  <h3
                    className=" mb-0 w-100 index_20 position-relative"
                    onClick={clickshow}
                  >
                    {NavShow ? <MenuIcon /> : <CrossIcon />}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
