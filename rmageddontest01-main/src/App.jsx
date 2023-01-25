import styles from "./style";
// import {
//   Reward,
//   Footer,
//   Navbar,
//   Hero,
//   Attraction,
//   Registation,
//   Card,
// } from "./components";
import ReactGA from "react-ga";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Attraction from "./Components/Attraction";
import Reward from "./Components/Reward";
import Registation from "./Components/Registation";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import rmageddon from "./assets/Rmageddon_logo.png";

import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import { useEffect } from "react";
const App = () => {
  const TRACKING_ID = "UA-255175997-1";
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    // <div>
    //   {loading ? (
    //     <Loader loading={loading} />
    //   ) : (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Attraction />
            <Reward />
            {/* <Registation /> */}
            <Card />
            <Footer />
          </div>
        </div>
        {/* <Trial/> */}
        {/* <Form /> */}
      </div>
    </>
  );
};
export default App;
