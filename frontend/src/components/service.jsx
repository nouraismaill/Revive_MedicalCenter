import react from "react";

const Servicess = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container px-6 py-14 mx-auto">
        <h1 class="text-3xl font-bold text-center text-black capitalize lg:text-5xl dark:text-white">
          Explore our <span class="text-bluehavy">Services</span>
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-3">
          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-500 rounded-full dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40e1_medical-service-one.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image"
              />
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Cardiologist
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-500 rounded-full dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40df_medical-service-two.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image"
              />
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Pulmonary
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Interactively productize premium technologies where interdependent
              quality vectors available.
            </p>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center  bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-500  rounded-full dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40dd_medical-service-five.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image"
              />
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Neurology
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Quickly communicate enabled technology and turnkey leadership
              skills for the doctor.
            </p>
          </div>
        </div>
      </div>
      <div className="centered-container ">
        <a href="/services">
          <button
            type="button"
            class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            VIEW ALL SERVICES
          </button>
        </a>
      </div>
    </section>
  );
};

export default Servicess;
