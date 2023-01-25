import styles from "../style";
import { footerLinks, socialMedia } from "../Constant";
import { SocialIcon } from 'react-social-icons';
import idea_logo from "../assets/Idea_logo.png";
const Footer = () => (
  <section
    id="connect"
    name="connect"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h1 className="text-gradient text-3xl font-[600]">RNXG</h1>
        <p className={`font-poppins font-normal text-dimWhite text-[15px] leading-[23px]  mt-4 max-w-[435px]`}>
          RNXG (Robotics for Next Generation) presents a premier platform for
          the exploration and resolution of various technological challenges,
          fostering the creation of unparalleled solutions.
        </p>
      </div>
      <div className="flex-[0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className={`flex flex-col items-end ss:my-0 min-w-[150px]`}>
          {/* otherlinks */}
          <h4 className="font-poppins font-medium text-[15px] leading-[27px] text-white">
            Powered By
          </h4>
          <img src={idea_logo} className="sponsor_img"/>
          
        </div>
        {/* club */}
        {/* <div>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Club
          </h4>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
            <a href="https://www.rnxg.co.in/">RNXG</a>
            </li>
          </ul>
        </div> */}
        {/* contact us  */}
        {/* <div>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-left ">
            Contact us
          </h4>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=rnxg@sggs.ac.in&tf=cm">rnxg@sggs.ac.in </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2023 RNXG. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 justify-between">
      <SocialIcon target="_blank" url="https://www.instagram.com/sggs_rnxg/" className="social"/>
      <SocialIcon target="_blank" url="https://www.facebook.com/rnxgsggs" className="social"/>
      <SocialIcon target="_blank" url="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A31238246&keywords=rnxg&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d79dd991-69ab-4670-9543-5643e13efd28&sid=gg7" className="social"/>
      <SocialIcon target="_blank" url="https://www.youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA" className="social"/>
      </div>
    </div>
  </section>
);

export default Footer;
