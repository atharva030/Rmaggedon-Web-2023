import React from "react";
import { rnxg, rnxgmp4, roborace, rmageddon_logo, mario } from "../assets"
import Lottie from "lottie-react";
import "./Loader.css";
import styles from "../style";
const Loader = () => {
  return (
    <div >
      <div className=" absolute z-[0] w-full h-full top-0 bg-black" />
      <div className="absolute z-[0] w-[80%] h-[40%] rounded-full b__gradient bottom-40" />
      {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 b__gradient" /> */}
      <div>
        <Lottie animationData={mario} />
      </div>
    </div>
  );
};
export default Loader;