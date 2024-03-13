import Servicess from "../components/service";
import doctorImg from "../assets/images/doctor.png";
import FaqList from "../components/faqList";
import Team from "../components/Team";
import { Link } from "react-router-dom";
import Testimonial from "../components/testimonial";
import faqImg from "../assets/images/faq-img.png";
import heroBanner from "../assets/images/hero-banner.png";
import Stats from "../components/stats";

const Home = () => {
  return (
    <>
      <section className="  bg-cover 4xl:h-[800px] sm:pt-[5px] bg-center ">
        <div className=" max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden lg:flex md:grid md:grid-cols-2 sm:mt-9 md:px-8">
          <div className="flex-none space-y-6 px-4 sm:max-w-lg md:px-0 lg:max-w-xl  sm:ml-[60px] lg:mb-[80px]">
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

          <div className="flex-none mt-14 md:mt-0 md:max-w-lg  ">
            <img
              src={heroBanner}
              className="max-w-[380px] lg:mx-[20px] lg:my-[-15px] md:mx-[5px] sm:w-[900px] sm:ml-[140px] "
              alt=""
            />
          </div>
        </div>
      </section>

      <div>
        <Servicess />
      </div>
      <div className="pt-0">
        <Team />
      </div>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 pl-[50px] hidden md:block ">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full leading-8  md:w-1/2">
              <h2 className="text-3xl p-4 ml-1  text-black-800 font-bold">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 ">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto sm:text-center">
            <h3 className="text-3xl font-bold text-center text-black capitalize lg:text-5xl dark:text-white">
              What our patient <span class="text-bluehavy">say</span>
            </h3>
          </div>
          <Testimonial />
        </div>
        <div>
          <Stats />
        </div>
      </section>
    </>
  );
};

export default Home;
