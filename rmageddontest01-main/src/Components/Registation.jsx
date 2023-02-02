import React from "react";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { MdCelebration } from "react-icons/md";
import { step_image } from "../assets";
const Registation = () => {
  return (
    <section id="register" name="register">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white text-gradient ">
                Steps to confirm your seat in RMAGEDDON23
              </h1>
              {/* <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full text-secondary"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-[black-grdient]"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[black-grdient]"></span>
              </div> */}
            </div>
            <div className="md:flex md:items-baseline items-baseline md:-mx-4">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <GiClick className=" w-6 h-6 " />
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white ">
                  Filling up the form
                </h1>
                <p className="mt-3 text-gray-300 dark:text-gray-200">
                  Please complete the form provided below with accurate and
                  unique information before the registration deadline on
                  <span className="font-bold"> February 5th at 11:59 PM </span>.
                  Kindly make sure to submit the required fee payment as well
                </p>
              </div>
            </div>
            <div className="md:flex md:items-baseline md:-mx-4">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <AiOutlineForm className=" w-6 h-6 " />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                  Verifying Details
                </h1>

                <p className="mt-3 text-gray-300 dark:text-gray-200 ">
                Our team will conduct a thorough verification of the information provided by you. If we encounter any issues during the verification process, we will contact the relevant team for resolution. If everything is in order, you can expect to receive a confirmation email within 1-2 days
                </p>
              </div>
            </div>

            <div className="md:flex md:items-baseline md:-mx-4 ">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <MdCelebration className=" w-6 h-6 " />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                  Create and Conquer
                </h1>

                <p className="mt-3 text-gray-300 dark:text-gray-300">
                Upon receipt of the confirmation email, please visit the RNXG lab where you will receive the necessary components based on your registration. We will then assist you in getting your bot ready for the competition in the arena
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <a href="" target={"/"}>
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full bg-black-gradient"
                src={step_image}
                alt="image"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registation;
