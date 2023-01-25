import { facebook, instagram, linkedin, youtube } from "../assets";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { MdCelebration } from "react-icons/md";
export const footerLinks = [
  {
    title: "Club",
    links: [
      {
        name: "About",
        link: "https://www.rnxg.co.in/profiles",
      },
      {
        name: "Privacy",
        link: "https://www.rnxg.co.in/Privicy",
      },
      {
        name: "Terms & Condittion",
        link: "https://www.rnxg.co.in/Terms",
      },
    ],
  },
  {
    title: "Other-link",
    links: [
      {
        name: "Home",
        link: "https://www.rnxg.co.in/profiles",
      },
      { id: "Competition", name: "Competition" },
      { id: "register", name: "Register" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "rnxg@sggs.ac.in",
        link: "https://mail.google.com/mail/u/0/?fs=1&to=rnxg@sggs.ac.in&tf=cm",
      },
    ],
  },
];
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "treasure",
    title: "Treasure",
  },
  {
    id: "battles",
    title: "Battles",
  },
  // {
  //   id: "register",
  //   title: "Register",
  // },
  {
    id: "connect",
    title: "Connect",
  },
];
export const features = [
  {
    id: "reward-1",
    title: "Cash Prizes",
    content: "The overall Cash Prize of Rs.  30,000 ",
  },
  {
    id: "reward-2",
    title: "Certificate of Participation",
    content: "Every Participant will get the Certificate" ,
  },
];
export const attraction = [
  {
    id: "Competition",
    title: "Competition",
    value: "2+",
  },
  {
    id: "theme",
    title: "New Themes",
    value: "2+",
  },
  {
    id: "Cash ",
    title: "Cash Price",
    value: "25K+",
  },
];
export const socialMedia = [
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/sggs_rnxg/",
  },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/rnxgsggs",
  },

  {
    id: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A31238246&keywords=rnxg&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d79dd991-69ab-4670-9543-5643e13efd28&sid=gg7",
  },
  {
    id: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA",
  },
];
export const steps = [
  {
    id: "step-1",
    icon: { GiClick },
    title: "Click on the Regester Now button",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "step-2",
    icon: { AiOutlineForm },
    title: "Fill Up Your Details",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "step-3",
    icon: { MdCelebration },
    title: "Here You Go registration Sucessfull",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
