import styles from "./style";

import ReactGA from "react-ga";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Attraction from "./Components/Attraction";
import Reward from "./Components/Reward";
import Registation from "./Components/Registation";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import rmageddon from "./assets/Rmageddon_logo.png";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
=======
>>>>>>> a8dba5a (adding lodder mario json file)
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./Components/Loader";
import { useState } from "react";
const App = () => {
  const TRACKING_ID = "UA-255175997-1";
  ReactGA.initialize(TRACKING_ID);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},2000)
  },[])

  // npm i react-ga4 
  // ReactGA.initialize("MEASUREMENT_ID") FROM REACT GA4 LATEST 
  // ReactGA.send({ hitType: "pageview", page: "/" });
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
<<<<<<< HEAD
    // <div>
    //   {loading ? (
    //     <Loader loading={loading} />
    //   ) : (
    <>
     <Helmet>
        <title>Rmageddon 2023</title>
        <meta
          name="description"
          content="Unleash the full potential of your robotic creations and showcase your skills to the elite in the field of robotics at RNXG. Compete for recognition and prizes at Rmageddon and be a part of the most exciting college robotics event of the year!"
        />
        <meta
          name="keywords"
          content="rnxg,rmageddon23,rmageddon,robotics,sggs,prizes, pac runner, retromania, ninja clash, competition, idealab"
        />
      </Helmet>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
=======
    <>{loading ? (<Loader/>) : (
      <div>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBar />
            </div>
>>>>>>> a8dba5a (adding lodder mario json file)
          </div>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
              {/* {state ? <Loader state={state}/> :<Hero/>} */}
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

      </div>)}
     </>
  );
};
export default App;
