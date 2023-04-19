import React, { useState } from "react";
import { TbMessage2 } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./auth.css";
const BackupVarifyEmail = () => {
  const [data, setData] = useState({
    firstDigit: "",
    secondDigit: "",
    thirdDigit: "",
    fourthDigit: "",
  });

  const { firstDigit, secondDigit, thirdDigit, fourthDigit } = data;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstDigit, secondDigit, thirdDigit, fourthDigit } = data;
    const one = parseInt(firstDigit);
    const two = parseInt(secondDigit);
    const three = parseInt(thirdDigit);
    const four = parseInt(fourthDigit);
    const otp = one + "" + two + "" + three + "" + four;
  };

  var elts = document.getElementsByClassName("test");
  Array.from(elts).forEach(function (elt) {
    elt.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 1 || elt.value.length == 1) {
        // Focus on the next sibling
        if (elts.length <= 4) {
          elt.nextElementSibling.focus();
        }
      }
    });
  });

  console.log("====", elts.length);

  return (
    <div>
      <section className="check_email_wrapper">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="form_container">
              <div className="text-center">
                <div className="d-flex justify-content-center">
                  <span className="span_message">
                    <TbMessage2 />{" "}
                  </span>
                </div>
                <h5 className="mt-2 fw-bold">Check your email</h5>
                <p>
                  We sent a password reset link to <br /> olivia@untitledui.com
                </p>
              </div>
              <div className="check_email_otp">
                <input
                  type="number"
                  name="firstDigit"
                  className="input_email_control test"
                  maxLength={1}
                  value={firstDigit}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="secondDigit"
                  className="input_email_control test"
                  maxLength={1}
                  value={secondDigit}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="thirdDigit"
                  className="input_email_control test"
                  maxLength={1}
                  value={thirdDigit}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="fourthDigit"
                  className="input_email_control test"
                  maxLength={1}
                  value={fourthDigit}
                  onChange={handleInput}
                />
              </div>

              <div className="button_style mt-4">
                <button className="btn btn-dark w-100" onClick={handleSubmit}>
                  Verify Email
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex mt-3">
                  <span className="me-2">Didn't receive the email?</span>
                  <NavLink className="nav-link fw-bold">
                    Click to resend
                  </NavLink>
                </div>
              </div>
              <div className="back_login text-center mt-4">
                <NavLink className="nav-link" to="/">
                  <span className="me-1">
                    <IoMdArrowRoundBack />{" "}
                  </span>
                  Back to Login{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackupVarifyEmail;
