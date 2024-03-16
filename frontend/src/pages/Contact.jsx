import React from "react";

const Contact = () => {
  return (
    <section>
      <div class="slider-area2 ">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row ">
              <div class="col-xl-12  lg:mx-80 md:mx-40   md:flex-none lg:flex-none space-y-6   sm:max-w-lg md:max-w-md lg:max-w-xl">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>Contact Us</h2>
                  <p className="breadcrumb-paragraph  ">
                    We Are Ready To Assist You In 24x7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-[#FFFFFF] dark:bg-gray-800 sm:rounded-lg">
                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"></div>
                <div className="leading-9 ">
                  <div className="flex items-center mt-2 ">
                    <span class="inline-block  p-5  text-blue-500  bg-blue-500 rounded-full  dark:text-white dark:bg-blue-500">
                      <img
                        src="https://uploads-ssl.webflow.com/6377548db7a796209f44fc12/638dbf8dac558a051780664e_phone-call.svg"
                        loading="lazy"
                        alt="call-img"
                        width="33"
                      />
                    </span>
                    <div class="contact-info">
                      <h3 className="ml-4 tracking-wide text-[20px] font-bold w-40">
                        Call us
                      </h3>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 ">
                    <span class="inline-block  p-5  text-blue-500  bg-blue-500 rounded-full  dark:text-white dark:bg-blue-500">
                      <img
                        src="	https://uploads-ssl.webflow.com/6377548db7a796209f44fc12/63996292dbae1bb25aeba0f5_email.svg"
                        loading="lazy"
                        alt="email-img"
                        width="33"
                      />
                    </span>
                    <div class="contact-info">
                      <h3 className="ml-4 tracking-wide text-[20px] font-bold w-40">
                        Call us
                      </h3>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 ">
                    <span class="inline-block  p-5  text-blue-500  bg-blue-500 rounded-full   dark:text-white dark:bg-blue-500">
                      <img
                        src="https://uploads-ssl.webflow.com/6377548db7a796209f44fc12/638dbd7cbf262e5ba631d32a_location.svg"
                        loading="lazy"
                        alt="address-img"
                        width="25"
                      />
                    </span>
                    <div class="contact-info">
                      <h3 className="ml-4 tracking-wide text-[20px] font-bold w-40">
                        Call us
                      </h3>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                      <a
                        href="tel:+227-300-3676"
                        className="ml-4 text-md tracking-wide font-semibold w-40  text-gray-600 dark:text-gray-400"
                      >
                        +227-300-3676
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form
                action="https://fabform.io/f/xxxxx"
                method="post"
                class="p-6 flex flex-col justify-center bg-[#F4F6F9]"
              >
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="message" class="hidden">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="md:w-32 bg-[#2196F3] text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
