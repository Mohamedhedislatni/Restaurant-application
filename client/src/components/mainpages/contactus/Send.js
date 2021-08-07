import React from "react";
import emailjs from "emailjs-com";

import "./contactus.css";

export default function Send() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "youtube_template",
        e.target,
        "user_50DVSIRzBlOtcFiCdU30Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (

    
    <div className="container">
      <h2><center>CONTACT US</center></h2>
      <br></br>
      <form onSubmit={sendEmail}>
        <div class="row">
          <div class="col-25">
            <label for="fname">Name :</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              
              name="name"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Email :</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              
              name="email"
              placeholder="Your Email.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Subject :</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              
              name="subject"
              placeholder="Your subject.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Message :</label>
          </div>
          <div class="col-75">
            <textarea
            
              name="message"
              placeholder="Write something.."
              style = {{height:"200 px"}}
            ></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
