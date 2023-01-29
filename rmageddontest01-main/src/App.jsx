
import ReactGA from "react-ga";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Attraction from "./Components/Attraction";
import Reward from "./Components/Reward";
// import Registation from "./Components/Registation";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
// import rmageddon from "./assets/Rmageddon_logo.png";
import { Helmet } from "react-helmet";
import Form from "./Components/Form";
import { useEffect } from "react";
import Loader from "./Components/Loader";
import { useState } from "react";
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Payment from "./Components/Payment";
import styles from "./style";
const App = () => {
  const TRACKING_ID = "UA-255175997-1";
  ReactGA.initialize(TRACKING_ID);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // npm i react-ga4
  // ReactGA.initialize("MEASUREMENT_ID") FROM REACT GA4 LATEST
  // ReactGA.send({ hitType: "pageview", page: "/" });
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
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
      {loading ? (
        <Loader />
      ) : (
          <div>

              <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                    <NavBar />
                  </div>
                </div>
                <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                    {/* {state ? <Loader state={state}/> :<Hero/>} */}
                  </div>
                </div>
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <Attraction />
                    <Reward />
                    {/* <Registation /> */}
                    <Card />
                    <Form />
                    <Footer />
          
                  </div>
                </div>
                {/* <Trial/> */}
              </div>
            {/* <Routes >
              
              <Route path="#payment" element={<Payment/>}/>
            </Routes> */}



            {/* </Routes> */}
          </div>

      )}
    </>
  );
};
export default App;
