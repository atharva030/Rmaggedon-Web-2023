import React from "react";
import ninja_turtle from "../assets/ninja_turtle.png";
import pac_man from "../assets/pac_man.png";
import retromania from "../assets/retromania.png";
import styles from "../style";
import Button from "./Button";
const Card = () => {
  return (
    <section id="battles" name="battles">
      <div className="grid lg:grid-cols-3 gap-[8rem] text-green-400 py-10 h-full w-full ">
        <script src="https://cdn.tailwindcss.com" />
        <div className="flex h-screen items-center ml-[-2rem] ">
          <div className="w-10/12 group relative mx-auto w-[350px] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={pac_man}
                  alt=""
                  className=" rounded-full w-[150px] h-[150px] mb-6  mx-auto"
                />
                <p className="text-lg font-semibold text-gradient text-center">
                  PAC RUNNER
                </p>
                <p
                  className={`${styles.paragraph} max-w-[450px] mt-5  text-center`}
                >
                  The goal of the PAC RUNNER contest is for a robot to
                  accurately follow a black line on a white background, navigate
                  various turns, and complete the arena in the shortest time
                  possible. The robot that successfully tracks the path line
                  from start to finish in the quickest manner will be the
                  winner.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-7`} className="sm: card-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center ml-[-1rem]">
          <div className=" w-10/12 group relative mx-auto w-[350px] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={retromania}
                  alt=""
                  className="rounded-full w-[150px] h-[150px] mb-6  mx-auto"
                />
                <p className="text-lg font-semibold text-gradient text-center">
                  RETROMANIA
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}
                >
                  Design a wired robot within the specified dimensions that can
                  operated manually and can travel through all turns of the
                  track and pass through all the obstacles. The robot that will
                  complete the race in least time will be the winner of the
                  RETROMANIA.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-14`} className="sm:" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center ml-[-1rem] ">
          <div className="w-10/12 group relative mx-auto w-[350px] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible m-6"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={ninja_turtle}
                  alt=""
                  className="rounded-full w-[150px] h-[150px] mb-6  mx-auto"
                />
                <p className="text-lg font-semibold text-gradient text-center">
                  NINJA CLASH
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center `}
                >
                  NINJA CLASH is a sport in which 2 robots have to push each
                  other out of the arena. The operators have to operate robots
                  from outside and try to push opponent's robot out of the arena
                  by different tactics also have to prevent own robot from
                  leaving the arena.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-10`} className="sm:" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" w-full py-[5rem] px-4" name="battels">
        <h1 className="text-gradient flex justify-center mb-20 text-2xl font-bold ">
          Battels
        </h1>
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  ">

          <div className="bg-black-gradient text-white w-full shadow-2xl flex  flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
            <img className="w-20 mx-auto mt-[3rem] rounded-full" src={pac_man} alt="" />
            <h2 className="  py-8 text-lg font-semibold text-gradient text-center">PAC-RUNNER </h2>
            <p className=" text-center text-small ">
              The goal of the PAC RUNNER contest is for a robot to
              accurately follow a black line on a white background, navigate
              various turns, and complete the arena in the shortest
              possible time . The robot that successfully tracks the path line
              from start to finish in the quickest manner will be the
              winner.
            </p>
            <div className=" justify-center flex ">
              <Button styles={`mt-10`} className="sm:" />
            </div>
          </div>
          <div className="  bg-black-gradient text-white  w-full shadow-2xl flex  flex-col py-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
            <img className="w-20 mx-auto mt-[3rem] rounded-full" src={retromania} alt="" />
            <h2 className="text-lg font-semibold text-gradient text-center py-8">RETROMINIA</h2>
            <p className=" text-center text-small    ">
              Design a wired robot within the specified dimensions that can
              operated manually and can travel through all turns of the
              track and pass through all the obstacles. The robot that will
              complete the race in least time will be the winner of the
              RETROMANIA.
            </p>
            <div className=" justify-center flex ">
              <Button styles={`mt-10`} className="sm:" />
            </div>
          </div>
          <div className=" bg-black-gradient text-white w-full shadow-2xl flex  flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
            <img className="w-20 mx-auto mt-[3rem] rounded-full" src={ninja_turtle} alt="" />
            <h2 className="text-lg font-semibold text-gradient text-center py-8">NINJA CLASH</h2>
            <p className=" text-center text-small">
              NINJA TURTLE is a sport in which 2 robots have to push each
              other out of the arena. The operators have to operate robots
              from outside and try to push opponent's robot out of the arena
              by different tactics also have to prevent own robot from
              leaving the arena.
            </p>
            <div className=" justify-center flex ">
              <Button styles={`mt-10`} className="sm:" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default Card;
