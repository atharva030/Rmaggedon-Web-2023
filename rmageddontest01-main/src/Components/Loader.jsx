import React from "react";
import { rmageddon_logo_anim } from "../assets";
const Loader = () => {
  return (
    <div>
      <div class="center-loader">
        <div class="ring"></div>
        <JSON width={120} src={rmageddon_logo_anim} alt="" />
      </div>
    </div>
  );
};

export default Loader;
