import React from "react";
import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { useState } from "react";
// import videobg1 from "../Asset/videobg1.mp4"
const Form = () => {
  const [tcCheck, setTcCheck] = useState(true);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [formData, setFormData] = useState({
    checkboxValues: [],
    teamName: "",
    total:"" ,
    workshop: "",
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    leaderReg: "",
    leaderBranch: "",
    leaderYear: "",
  });
  const termCheck = () => {
    setTcCheck(!tcCheck);
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
    e.preventDefault();
    if (e.target.checked) {
      setCheckboxValues(...formData.checkboxValues, e.target.value);
    } else {
      setCheckboxValues(
        checkboxValues.filter((value) => value !== e.target.value)
      );
    }
    console.log(formData);
    // const response = await fetch(`https://rmaggedon.vercel.app/createuser`, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(formData), // body data type must match "Content-Type" header
    // });
    // const json = await response.json();
    // console.log(formData);
    // if (json.success) {
    //   e.preventDefault();
    //   alert(
    //     "You have been successfully Registered for the events, Please check your emails for further updates"
    //   );
    // } else {
    //   alert("Credentials that you entered must be unique");
    // }
  };
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //this is mainly use to reflect the change in words on frontend
    console.log(formData.total);
  };
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
  function onChange(value) {
    console.log("Captcha value:", value);
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
      <div className="form" >
        {/* <video className="Vid" src={videobg1} autoplay loop muted /> */}
        <h1 className="form_title">Registration Form</h1>
        <form action="" className="form_main" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="first_legend">Team Details</legend>
            <fieldset className="input_field">
              <legend id="name-legend">Team Name</legend>
              <input
                className="req_field"
                type="text"
                value={formData.teamName}
                name="teamName"
                id="teamName"
                autoComplete="off"
                placeholder="Enter your Team Name"
                onChange={onchange}
                minLength={4}
                required
              />
            </fieldset>

            <fieldset className="input_field">
              <legend>Choose Team Size</legend>
              <input
                // type="text"
                className="req_field"
                value={formData.total}
                // autoComplete="off"
                name="total"
                id="total"
                type="number"
                placeholder="Enter your Leader Name"
                onChange={onchange}
                min="3" 
                max="4"
                required
              />
              {/* <select
                id="dropdown"
                type="text"
                autoComplete="off"
                value={formData.totalTeamMember}
                name="totalTeamMember"
                placeholder="Enter your totalTeamMember"
                onChange={onchange}
                required
              >
                <option value="">Choose Total Members</option>
                <option value="3">3 Members</option>
                <option value="4">4 Members</option>
              </select> */}

              
            </fieldset>
            <fieldset className="check">
              <div className="checks">
                <legend>
                  Game/Games to <br /> be register
                </legend>

                <label>
                  <input
                    type="checkbox"
                    value="Retrofeista"
                    onChange={handleCheckboxChange}
                  />
                  <span> Retrofeista</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Ninja Clash"
                    onChange={handleCheckboxChange}
                  />
                  <span>Ninja Clash</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Pac Runner"
                    onChange={handleCheckboxChange}
                  />
                  <span> Pac Runner</span>
                </label>
              </div>
            </fieldset>
            <fieldset className="input_field">
              <legend>Have your attended the workshop?</legend>
              <select
                id="dropdown"
                type="text"
                value={formData.workshop}
                name="workshop"
                onChange={onchange}
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
                onChange={onchange}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="number-legend">Contact number</legend>
              <input
                type="text"
                value={formData.leaderPhone}
                autoComplete="off"
                className="req_field"
                name="leaderPhone"
                id="leaderPhone"
                placeholder="Enter your Leader Phone"
                onChange={onchange}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="email-legend">Email</legend>
              <input
                type="text"
                value={formData.leaderEmail}
                autoComplete="off"
                className="req_field"
                name="leaderEmail"
                id="leaderEmail"
                placeholder="Enter your Leader Email"
                onChange={onchange}
                required
              />
            </fieldset>
            <fieldset className="input_field">
              <legend id="Rno-legend">Registration number</legend>
              <input
                type="text"
                value={formData.leaderReg}
                name="leaderReg"
                autoComplete="off"
                className="req_field"
                id="leaderReg"
                placeholder="Enter your Leader Registration"
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
            <div className="capcha-flex">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                required
              />
              <div className="captha"></div>
            </div>
          </fieldset>

          {/* <fieldset>
          <legend className="first_legend">Second member</legend>
          <fieldset className="input_field">
            <legend id="name-legend">Name:</legend>
            <input
              type="text"
              value={formData.smName}
              name="smName"
              placeholder="Enter your smName"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input
              type="text"
              value={formData.smPhone}
              name="smPhone"
              placeholder="Enter your smPhone"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="email-legend">Email:</legend>
            <input
              type="text"
              value={formData.smEmail}
              name="smEmail"
              placeholder="Enter your smEmail"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input
              type="text"
              value={formData.smReg}
              name="smReg"
              placeholder="Enter your smReg"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend>Branch:</legend>
            <select
              id="dropdown"
              type="text"
              value={formData.smBranch}
              name="smBranch"
              placeholder="Enter your smBranch"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset className="input_field">
            <legend>Year:</legend>
            <select
              id="dropdown"
              type="text"
              value={formData.smYear}
              name="smYear"
              placeholder="Enter your smYear"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset id="fieldset1">
          <legend className="first_legend">Third member</legend>
          <fieldset className="input_field">
            <legend id="name-legend">Name:</legend>
            <input
              type="text"
              value={formData.tmName}
              name="tmName"
              placeholder="Enter your tmName"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input
              type="text"
              value={formData.tmPhone}
              name="tmPhone"
              placeholder="Enter your tmPhone"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="email-legend">Email:</legend>
            <input
              type="text"
              value={formData.tmEmail}
              name="tmEmail"
              placeholder="Enter your tmEmail"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input
              type="text"
              value={formData.tmReg}
              name="tmReg"
              placeholder="Enter your tmReg"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend>Branch:</legend>
            <select
              id="dropdown"
              type="text"
              value={formData.tmBranch}
              name="tmBranch"
              placeholder="Enter your tmBranch"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset className="input_field">
            <legend>Year:</legend>
            <select
              id="dropdown"
              type="text"
              value={formData.tmYear}
              name="tmYear"
              placeholder="Enter your tmYear"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
          </fieldset>
        </fieldset>

        <fieldset id="fieldset2">
          <legend className="first_legend">Fourth member</legend>
          <fieldset className="input_field">
            <legend id="name-legend">Name:</legend>
            <input
              type="text"
              value={formData.fmName}
              name="fmName"
              placeholder="Enter your fmName"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="number-legend">Contact number:</legend>
            <input
              type="text"
              value={formData.fmPhone}
              name="fmPhone"
              placeholder="Enter your fmPhone"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="email-legend">Email:</legend>
            <input
              type="text"
              value={formData.fmEmail}
              name="fmEmail"
              placeholder="Enter your fmEmail"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend id="Rno-legend">Registration number:</legend>
            <input
              type="text"
              value={formData.fmReg}
              name="fmReg"
              placeholder="Enter your fmReg"
              onChange={onchange}
              required
            />
          </fieldset>
          <fieldset className="input_field">
            <legend>Branch:</legend>
            <select
              type="text"
              value={formData.fmBranch}
              name="fmBranch"
              placeholder="Enter your fmBranch"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's branch</option>
              <option value="cse">Computer Science And Engineering</option>
              <option value="che">Chemical Engineering</option>
              <option value="cie">Civil Engineering</option>
              <option value="ete">
                Electronics And Telecommunication Engineering
              </option>
              <option value="ele">Electrical Engineering</option>
              <option value="int">Information Technology</option>
              <option value="ine">Instrumentation Engineering</option>
              <option value="mee">Mechanical Engineering</option>
              <option value="tet">Textile Technology</option>
              <option value="pre">Producation Engineering</option>
            </select>
          </fieldset>
          <fieldset className="input_field">
            <legend>Year:</legend>
            <select
              type="text"
              value={formData.fmYear}
              name="fmYear"
              placeholder="Enter your fmYear"
              onChange={onchange}
              required
            >
              <option value="none">Choose member's year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="final">Final Year</option>
            </select>
              
          </fieldset>
          
        </fieldset> */}
          {/* <input type="file" placeholder="Choose File" /> */}
          <fieldset className="T_C">
            <legend className="first_legend">Do you agree</legend>
            <label>
              <input
                required
                name="checkbox"
                type="checkbox"
                value="male"
                onChange={termCheck}
              />
              By checking this, you conform and agree to the all
              <a href="https://www.rnxg.co.in/Privicy"> Privacy</a> and
              <a href="https://www.rnxg.co.in/Terms"> Terms and Condittions.</a>
            </label>
          </fieldset>

          <button type="submit" disabled={tcCheck}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
