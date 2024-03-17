import React from "react";
import Star from "../../assets/images/Star.png";
import doctorsTeam from "../../assets/data/alldoctors";

const Doctors = () => {
  return (
    <>
      <section>
        <div class="slider-area2 p-10">
          <div class="slider-height2 d-flex align-items-center">
            <div class="col-xl-12   lg:mx-80 md:mx-40  lg:flex-none    lg:max-w-xl">
              <div class="hero-cap leading-2   hero-cap2 text-center">
                <h2>Find a Doctor</h2>
              </div>
            </div>
          </div>
          <div class="flex  items-center justify-center ">
            <div class="rounded-lg  p-5">
              <div class="flex">
                <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="pointer-events-none absolute w-4 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  class="w-full pr-2 py-4 max-w-[570px]  bg-white pl-4 text-base text-black font-semibold focus:outline-none"
                  placeholder="Search a Doctor"
                  id=""
                />
                <input
                  type="button"
                  value="Search"
                  class="bg-[#300285] p-3 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12">
              <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-3 ">
                {doctorsTeam.map((item, idx) => (
                  <li key={idx}>
                    <img
                      src={item.photo}
                      className=" object-cover rounded-xl aspect-square"
                      alt=""
                    />
                    <h2 className="text-[18px] leading-[30px] lg:text-[26px]  lg:leading-9 text-black font-[700]">
                      {item.name}
                    </h2>
                    <div className="mt-2 lg:mt-4 flex items-center justify-between">
                      <span className="bg-heavygreen text-green-900 py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                        {item.specialization}
                      </span>
                      <div className="flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-black ">
                          <img src={Star} alt="" />
                          {item.avgRating}
                        </span>

                        <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-gray-500">
                          ({item.totalRating})
                        </span>
                      </div>
                    </div>
                    <div className="mt-[18px] lg:mt-5  flex items-center justify-between"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Doctors;
