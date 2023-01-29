import React from "react";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { MdCelebration } from "react-icons/md";
import { step_image } from "../assets";
const Registation = () => {
  return (
    <section id="register" name="register" className="h-[100vh]">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-gradient ">
                Steps To <br />
                <span>Register in this awesome compittion</span>
              </h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full text-secondary"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-[black-grdient]"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[black-grdient]"></span>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <GiClick className=" w-6 h-6 " />
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white ">
                  Click on Register Now button
                </h1>
                <p className="mt-3 text-gray-300 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet.
                </p>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <AiOutlineForm className=" w-6 h-6 " />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                  Fill Up Your Details
                </h1>

                <p className="mt-3 text-gray-300 dark:text-gray-200 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4 ">
              <span className="inline-block p-2 text-black bg-blue-100 rounded-xl md:mx-4 dark:text-white bg-gradient-to-l from-[#00df9a] to-[#DFFA2D]">
                <MdCelebration className=" w-6 h-6 " />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                  Here You Go Regitration sucessfull
                </h1>

                <p className="mt-3 text-gray-300 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
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
