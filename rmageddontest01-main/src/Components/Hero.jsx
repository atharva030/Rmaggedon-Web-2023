import styles from "../style";
import { rmageddon } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      name="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[76px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient">RMAGEDDON 2023 </span>{" "}<br></br>          
          </h1>
        </div>

        <h1 className="font-poppins  font-semibold ss:text-[64px] text-[64px] text-white ss:leading-[80.8px] leading-[75px] w-full">
        Experience the <br/>future of robotics
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get ready to unleash the potential of your robotic creations and also get ready to join the elite in the field of robotics at RNXG and compete for recognition and prizes at the Rmageddon
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative object:contain`}
      >
        <img
          src={rmageddon}
          alt="rmageddon" 
          className="object-contain scale-[1.2] w-[80%] h-[80%]  relative z-[5] head-image"
        />
        <div className="absolute z-[0] w-[40%] h-[20%] top-0 g__gradient" />
        <div className="absolute z-[1] w-[80%] h-[40%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 b__gradient" />
      </div>
    </section>
  );
};

export default Hero;
