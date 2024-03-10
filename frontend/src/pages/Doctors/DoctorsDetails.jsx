import React from "react";
import { useState } from "react";
import SidePanel from "./SidePanel";

import doctor1 from "../../assets/images/doctor1.jpg";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctor1} alt="" className="w-full pt-5" />
              </figure>
              <div className="pt-20">
                <span className="bg-heavygreen text-green-800  py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Dermatologist
                </span>
                <h3 className="text-black text-[22px] leading-9 mt-3 font-bold">
                  Daved john
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-black ">
                    <img src={starIcon} alt="" />
                    4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-black">
                    (272)
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora labore, sequi iure adipisci velit eveniet. Dolorum
                  odio placeat vitae, libero quis aspernatur voluptate?
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-blue-500 "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b border-solid border-blue-500 "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoctorsDetails;
