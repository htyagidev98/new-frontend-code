import React, { Component, ReactDOM } from 'react';
import Button from 'react-bootstrap/Button';
class VerifyEmail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "",  disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
   const {otp1, otp2, otp3, otp4}= this.state;
   const firstDigit= otp1;
   const secDigit=otp2;
   const thirdDigit= otp3;
   const fourthDigit= otp4;
  //  const fifthDigit= otp5;
   const otp= firstDigit+""+secDigit+""+thirdDigit+""+fourthDigit
    // console.log(this.state);
   
    console.log('otp', otp);
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 4) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="otpContainer">

          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

        
        </div>
        <Button className="primary mt-2" type="submit">
          Verify Otp
        </Button>
      </form>
    );
  }
}


export default VerifyEmail;
