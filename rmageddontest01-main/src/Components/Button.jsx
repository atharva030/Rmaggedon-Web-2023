import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 cursor-not-allowed new-btn px-6 font-poppins font-medium text-[16px] text-primary bg-blue-gradient hover:bg-sky-700 rounded-[10px] outline-none ${styles}`}>
  Coming Soon
  </button>
  
);

export default Button;
