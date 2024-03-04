import Servicess from "../components/service";
import doctorImg from "../assets/images/doctor.png";
import FaqList from "../components/faqList";
import Team from "../components/Team";
import { Link } from "react-router-dom";

import Stats from "../components/stats";

const Home = () => {
  return (
    <>
      <section className=" lg:mt-0  bg-cover 4xl:h-[800px] sm:mt-[2px] bg-center ">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px]">
              We help patients live a healthy, longer life.
            </h1>
            <p>
              Experience exceptional healthcare at Revive Medical Center. Our
              team of healthcare professionals delivers compassionate,
              patient-centered care tailored to your unique needs. Discover the
              difference today!
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 ">
              <a href="/doctors" className=" btn ">
                Book Appointment
              </a>
            </div>
          </div>

          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img src={doctorImg} className="max-w-[730px] self-end" alt="" />
          </div>
        </div>
      </section>
      <div className="py-[40px]">
        <Stats />
      </div>
      <div>
        <Servicess />
      </div>
      <div className="pt-0">
        <Team />
      </div>
    </>
  );
};

export default Home;
