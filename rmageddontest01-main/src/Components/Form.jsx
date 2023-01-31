import React from "react";
import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../style";
import Loader2 from "./Loader2";
import QR from "../assets/QR.png";
import Select, { components } from "react-select";
import refenceImg from '../assets/ref.png'
///////////////////////////////////////////////////////////////////

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
    width: "100%",
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};

const allOptions = [
  { value: "RETROMANIA", amount: 400, label: "RETROMANIA" },
  { value: "PAC RUNNER", amount: 400, label: "PAC RUNNER" },
  { value: "NINJA CLASH", amount: 400, label: "NINJA CLASH" },
];

////////////////////////////////////////////////////////////////

// import videobg1 from "../Asset/videobg1.mp4"
const Form = () => {
  ////////////////////////////////////////////////////////////////////////
  //////////////////// Testing //////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [amount, setamount] = useState("");
  const [loading, setloading] = useState(Boolean);
  const [tcCheck, setTcCheck] = useState(false);
  const [captcha, setcaptcha] = useState(true);
  const [globalTruth, setglobalTruth] = useState(Boolean);
  const [formData, setFormData] = useState({
    checkboxValues: [],
    totalTeamMember: "",
    paidAmt: amount,
    workshop: "",
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    leaderReg: "",
    leaderBranch: "",
    leaderYear: "",
    transId: "",
  });

  const termCheck = () => {
    setTcCheck(!tcCheck);
  };

  const PriceCalculator = () => {
    setamount(formData.checkboxValues.length * 400);
  };

  const handleCheckboxChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // const { languages } = userinfo;

    if (checked) {
      setFormData({ checkboxValues: [...formData.checkboxValues, value] });
    } else {
      setFormData({
        checkboxValues: formData.checkboxValues.filter((e) => e !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    // if (e.target.checked) {
    //   setCheckboxValues(...formData.checkboxValues, e.target.value);
    // } else {
    //   setCheckboxValues(
    //     checkboxValues.filter((value) => value !== e.target.value)
    //   );
    // }
    console.log(formData);
    const response = await fetch(`https://rmaggedon.vercel.app/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(formData);
    if (json.success) {
      e.preventDefault();
      setloading(false);
      alert(
        "You have been successfully Registered for the events, Please check your emails for further updates"
      );
      location.reload();
    } else {
      alert("Credentials that you entered must be unique");
      location.reload();
      setloading(false);
    }
  };
  // const onchange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value }); //this is mainly use to reflect the change in words on frontend
  //   console.log(formData.totalTeamMember);
  // };

  useEffect(() => {
    PriceCalculator();

    if (tcCheck == true && captcha == false) {
      setglobalTruth(true);
      console.log(globalTruth);
      console.log(selectedOptions);
      console.log(formData.checkboxValues);
    }

    setFormData({ ...formData, checkboxValues: selectedOptions });

    console.log(formData.totalTeamMember);
  }, [globalTruth, tcCheck, captcha, amount]);
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   console.log(formData.totalTeamMember)
  //   // newFunction(e.target.value);
  // };
  // const newFunction = (name) => {
  //   if (name == 3) {
  //     console.log("3");
  //     document.getElementById("fieldset1").style.display = "flex";
  //     document.getElementById("fieldset2").style.display = "none";
  //   } else if (name == 4) {
  //     console.log("4");
  //     document.getElementById("fieldset1").style.display = "flex";
  //     document.getElementById("fieldset2").style.display = "flex";
  //   }
  // };

  function onChange() {
    setcaptcha(false);
  }
  return (
    <>
      <Helmet>
        <title>RMAGEDDON 2023</title>
        <meta
          name="description"
          content="Registration, Rmaggedon 2023, form, game registration"
        />
      </Helmet>
      <div className="form" onSubmit={handleSubmit} id="form">
        {/* <video className="Vid" src={videobg1} autoplay loop muted /> */}
        <h1 className="form_title">Registration Form</h1>
        <form action="" className="form_main">
          <fieldset>
            <legend className="first_legend">Team Details</legend>
            <fieldset className="input_field">
              <legend id="name-legend">Team Name</legend>
              <input
                minLength={4}
                className="req_field"
                type="text"
                value={formData.teamName}
                name="teamName"
                id="teamName"
                autoComplete="off"
                placeholder="Enter your Team Name"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              />
            </fieldset>
            {/* <fieldset className="check">
              <div className="checks">
                <legend>
                  Game/Games to <br /> be register
                </legend>

                <label>
                  <input
                    type="checkbox"
                    value={"Retrofeista"}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <span> Retrofeista</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    value={"Ninja Clash"}
                    onChange={handleCheckboxChange}
                  />
                  <span>Ninja Clash</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    value={"Pac Runner"}
                    onChange={handleCheckboxChange}
                  />
                  <span> Pac Runner</span>
                </label>

              </div>
            </fieldset>  */}

            <Select
              required
              defaultValue={[]}
              isMulti
              placeholder="Choose your Games"
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              onChange={(options) => {
                setTcCheck(false);
                if (Array.isArray(options)) {
                  document.getElementById("checkbox").checked = false;

                  setSelectedOptions(
                    options.map((opt) => [opt.value, opt.amount])
                  );
                }
              }}
              options={allOptions}
              components={{
                Option: InputOption,
              }}
            />
            <fieldset className="input_field">
              <legend>Choose Team Size</legend>
              <select
                id="dropdown"
                type="text"
                autoComplete="off"
                value={formData.totalTeamMember}
                name="totalTeamMember"
                placeholder="Enter your totalTeamMember"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              >
                <option value="">Choose Total Members</option>
                <option value="2">2 Members</option>
                <option value="3">3 Members</option>
                <option value="4">4 Members</option>
              </select>
            </fieldset>

            <fieldset className="input_field">
              <legend>Attended the workshop?</legend>
              <select
                id="dropdown"
                type="text"
                value={formData.workshop}
                name="workshop"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              >
                <option value="">Have you attended?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend className="first_legend">Team Leader</legend>
            <fieldset className="input_field">
              <legend id="name-legend">Name</legend>
              <input
                type="text"
                className="req_field"
                value={formData.leaderName}
                autoComplete="off"
                name="leaderName"
                id="leaderName"
                placeholder="Enter your Leader Name"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="number-legend">Contact number</legend>
              <input
                type="tel"
                maxLength={10}
                minLength={10}
                value={formData.leaderPhone}
                autoComplete="off"
                className="req_field"
                name="leaderPhone"
                id="leaderPhone"
                placeholder="Enter your Leader Phone"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="email-legend">Email</legend>
              <input
                type="email"
                value={formData.leaderEmail}
                autoComplete="off"
                className="req_field"
                name="leaderEmail"
                id="leaderEmail"
                placeholder="Enter your Leader Email"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="Rno-legend">Registration number</legend>
              <input
                type="text"
                value={formData.leaderReg}
                maxLength={10}
                minLength={10}
                name="leaderReg"
                autoComplete="off"
                className="req_field"
                id="leaderReg"
                placeholder="Enter your Leader Registration"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend>Branch</legend>
              <select
                id="dropdown"
                type="text"
                autoComplete="off"
                value={formData.leaderBranch}
                name="leaderBranch"
                placeholder="Enter your leaderBranch"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              >
                <option value="none">Choose your branch</option>
                <option value="Computer">
                  Computer Science and Engineering
                </option>
                <option value="Chemical">Chemical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Electronics and Communication">
                  Electronics And Telecommunication Engineering
                </option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Information Tech">
                  Information Technology Engineering
                </option>
                <option value="Instrumentation">
                  Instrumentation Engineering
                </option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Textile">Textile Technology</option>
                <option value="Production">Production Engineering</option>
              </select>
            </fieldset>
            <fieldset className="input_field">
              <legend>Year</legend>
              <select
                id="dropdown"
                type="text"
                autoComplete="off"
                value={formData.leaderYear}
                name="leaderYear"
                placeholder="Enter your leaderYear"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
              >
                <option value="">Choose your year of study</option>
                <option value="first">First Year</option>
                <option value="second">Second Year</option>
                <option value="third">Third Year</option>
                <option value="final">Final Year</option>
                <option value="Mfirst">Mtech First Year</option>
                <option value="Mfinal">Mtech Final Year</option>
              </select>
            </fieldset>
            <div className="partion">
              <hr className="line" />
              <div className="amount_to_pay">
                 <img src={refenceImg} alt="" />
                <fieldset className="input_field">
                  <legend id="Rno-legend">UPI Transaction ID(12 Digit)</legend>
                  <input
                    minLength={12}
                    maxLength={12}
                    type="text"
                    value={formData.transId}
                    name="transId"
                    autoComplete="off"
                    className="req_field"
                    id="leaderReg"
                    placeholder="Enter your UPI Refrence No"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  />
                </fieldset>
              </div>
            </div>
            {/* <fieldset className=" ">
              <fieldset className="input_field flex flex-col "> */}
            <div
              id="bodayy"
              className="boday w-[98%] justify-between  items-start flex  "
            >
              <div className="parent field_flex">
                <div className="capcha-flex">
                  <ReCAPTCHA
                    sitekey="6LfcoAgjAAAAAJIx9Dxa6c9Z_CaQqgU7dObKIWaU"
                    required
                    onChange={() => {
                      setcaptcha(false);
                    }}
                  />
                </div>
               
                <h2>For Registration Query :</h2>
            <h3 style={{"color":"#fff "}}>Atharva Jagdale (8291798609)</h3>
            <h3 style={{"color":"#fff "}}> Adwait Bokade (9307108192)</h3>
              </div>

              <div className="qrr">
                <img
                  src={QR}
                  alt="payement QR  "
                  className="object-contain scale-[1.2] w-[350] h-[350px]  relative z-[5] head-image"
                />
              </div>
            </div>
            
          </fieldset>

          <div className="submitt">
          <h1 className="amount-display">
                  <span>Total Amount :</span> Rs {amount}/-<br/>
                  <h6 className="rate-style">Per Game Rs. 400/-</h6>
                </h1>
                <h2 className="note-style"> Note: Make sure that captcha and the T&C box should be checked for the amount to be paid!</h2>
            <fieldset className="T_C">
              {/* <legend className="first_legend">Do you agree</legend> */}
              <label>
                <input
                  required
                  name="checkbox"
                  type="checkbox"
                  value="male"
                  onChange={termCheck}
                  id="checkbox"
                />
                By checking this, you confirm and agree to the all
                <a href="https://www.rnxg.co.in/Privicy"> Privacy</a> and
                <a href="https://www.rnxg.co.in/Terms">
                  {" "}
                  Terms and Conditions.
                </a>
              </label>
            </fieldset>
            <button
              type="submit"
              disabled={captcha}
              onClick={() => {
                setFormData({ ...formData, paidAmt: amount });
              }}
              className={`w-[100px] h-[60px]  new-btn font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-sky-700 rounded-[10px] outline-none ${styles} items-center justify-items-center `}
            >
              {loading ? <Loader2 /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
