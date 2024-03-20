import doctorImg from "../assets/images/faq-img.png";
const About = () => {
  return (
    <section className="ezy__about12 light pt-14 md:pt-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5 justify-center items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:px-7">
              <h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
                ABOUT ME
              </h1>
              <p className="text-lg leading-normal opacity-75 my-6">
                Completely network collaborative web services via user-centric
                initiatives. Quickly promote sticky testing procedures
                collaborator before unique process improvements. Since our
                inception set out in 2012, TalEx has set out to disrupt
                inception the HR & Talent/Staffing Management industry.
                Purposefully designed by our founders (Amrita Grewal and Julie
                Dacar) to connect great companies and great talent.
              </p>
              <div className="mt-12"></div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center lg:justify-start lg:ml-12">
              <img src={doctorImg} alt="" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
