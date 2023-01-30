import { features } from "../Constant";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] w-23 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Reward = () => (
  <section id="treasure" name="treasure" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unlock Your Potential through Rmageddon After Participating
      </h2>
      <ul className={`${styles.paragraph} max-w-[470px] mt-5 ml-5`}>
        <li className="list-disc">
          Development of teamwork and project management skills
        </li>
        <li className="list-disc">
          Hands-on experience with designing, building, and programming robots
        </li>
        <li className="list-disc">
          Exciting Prizes and Certificates after completion
        </li>
      </ul>

      {/* <Button styles={`mt-10`} /> */}
      <a href="#form">
      <button
        type="button"
        className={`py-4 cursor-pointer new-btn px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-sky-700 rounded-[10px] outline-none `}
      >
        Register Now
      </button>
      </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Reward;
