import React, { useState } from "react";
import { TbMessage2 } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./auth.css";
const AutoGenerate = () => {
  const num = 123456;
  const[data, setData]= useState(num)

// ✅ get first digit of number as string
const firstDigitStr = String(data)[0];
const secDigitStr = String(data)[1];
const thirdtDigitStr = String(data)[2];
const fourthDigitStr = String(data)[3];
// console.log(firstDigitStr); // 👉️ 1
// console.log(typeof firstDigitStr); // 👉️ string

// ✅ get first digit of number as integer
// const firstDigitNum = Number(firstDigitStr);
// console.log(firstDigitNum); // 👉️ 1
// console.log(typeof firstDigitNum); // 👉️ number






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
                <input type="number" className="input_email_control" value={firstDigitStr} />
                <input type="number" className="input_email_control" value={secDigitStr} />
                <input type="number" className="input_email_control" value={thirdtDigitStr} />
                <input type="number" className="input_email_control" value={fourthDigitStr}/>
              </div>

              <div className="button_style mt-4">
                <button className="btn btn-dark w-100">Verify Email</button>
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

export default AutoGenerate;
