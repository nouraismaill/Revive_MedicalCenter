import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Servicess = () => {
  const boxesRef = useRef([]);
  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem); // Hide the element initially

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem),
      });
    });
    gsap.defaults({ ease: "power3" }); // Set default ease to power3

    gsap.set(".box", { y: 100 }); // Initial position for the animation

    // Set up ScrollTrigger batch animation
    ScrollTrigger.batch(boxesRef.current, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });

    // Add refreshInit listener to reset y position temporarily during refresh
    const refreshInitListener = () => gsap.set(".box", { y: 0 });
    ScrollTrigger.addEventListener("refreshInit", refreshInitListener);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      ScrollTrigger.removeEventListener("refreshInit", refreshInitListener);
    };
  }, []);

  const animateFrom = (elem, direction = 1) => {
    let x = 0;
    let y = direction * 100;

    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container px-6 py-14 mx-auto">
        <h1 class="gs_reveal   text-3xl font-bold text-center text-black capitalize lg:text-5xl dark:text-white">
          Explore our <span class="text-bluehavy">Services</span>
        </h1>

        <div
          class="  grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-3"
          ref={(el) => boxesRef.current.push(el)}
        >
          <div class=" flex flex-col items-center p-6 space-y-3 text-center bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block  p-5  text-blue-500  bg-blue-500 rounded-full  dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40e1_medical-service-one.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image"
              />
            </span>

            <h1 class="text-xl font-bold text-black capitalize dark:text-white">
              Cardiologist
            </h1>

            <p class=" text-black dark:text-gray-300">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
          </div>

          <div class=" flex flex-col items-center p-6 space-y-3 text-center bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block p-5 text-blue-500 bg-blue-500 rounded-full dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40df_medical-service-two.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image "
              />
            </span>

            <h1 class="text-xl font-bold  text-black capitalize dark:text-white">
              Pulmonary
            </h1>

            <p class=" text-black dark:text-gray-300">
              Interactively productize premium technologies where interdependent
              quality vectors available.
            </p>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center  bg-babyblue rounded-xl dark:bg-gray-800">
            <span class="inline-block p-5 text-blue-500 bg-blue-500  rounded-full dark:text-white dark:bg-blue-500">
              <img
                src="https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40dd_medical-service-five.svg"
                loading="lazy"
                alt="Service Icon"
                class="service-icon-image"
              />
            </span>

            <h1 class="text-xl font-bold text-black capitalize dark:text-white">
              Neurology
            </h1>

            <p class="text-black dark:text-gray-300">
              Quickly communicate enabled technology and turnkey leadership
              skills for the doctor.
            </p>
          </div>
        </div>
      </div>
      <div className=" centered-container ">
        <a href="/services">
          <button className="allservices bg-[#28AADC] text-white" type="button">
            VIEW ALL SERVICES
          </button>
        </a>
      </div>
    </section>
  );
};

export default Servicess;
