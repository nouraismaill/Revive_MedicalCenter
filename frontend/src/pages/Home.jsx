import react from "react";
import doctorImg from "../assets/images/doctor.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Home = () => {
  return (
    <>
      <section className=" lg:mt-[-82px]  bg-cover 4xl:h-[800px] sm:mt-[2px] bg-center ">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px]">
              Empowering healthier lives.
            </h1>
            <p>
              Experience exceptional healthcare at Revive Medical Center. Our
              team of healthcare professionals delivers compassionate,
              patient-centered care tailored to your unique needs. Discover the
              difference today!
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 ">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-[600] bg-bluehavy duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-[50px] shadow-lg hover:shadow-none"
              >
                Request an Appointment
              </a>
            </div>
            <div className="mt-[30px] lg:mt-[70px] flex flex-row lg:flow-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black ">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black ">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                <p className="text_para">Clinic Location</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black ">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-green-300 rounded-full block mt-[-14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img src={doctorImg} className="max-w-[730px] self-end" alt="" />
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className=" text-[44px] leading-[54px] text-black font-[700] text-center ">
              Providing the best medical services
            </h2>
            <p className="text-[16px] leading-7 text-gray-800 font-[400] mt-4 text-center">
              World-class care for everyone. Oir health system offeres
              unmatched, expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                  Find a Doctor
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:border-none"
                >
                  <ArrowCircleRightRoundedIcon className="bg-blue" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                  Find a Doctor
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:border-none"
                >
                  <ArrowCircleRightRoundedIcon className="bg-blue" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                  Find a Doctor
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:border-none"
                >
                  <ArrowCircleRightRoundedIcon className="bg-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
