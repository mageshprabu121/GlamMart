import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className="formbold-main-wrapper">
       
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="formbold-form-wrapper">
  <h1><i>Contact <span className='textcontact'>Us</span></i></h1>
    <form action="https://formbold.com/s/6lvbN" method="POST">
      <div className="formbold-mb-5">
        <label htmlFor="name" className="formbold-form-label">
          {" "}
          Full Name{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="formbold-form-input"
        />
      </div>
      <div className="formbold-mb-5">
        <label htmlFor="phone" className="formbold-form-label">
          {" "}
          Phone Number{" "}
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          className="formbold-form-input"
        />
      </div>
      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label">
          {" "}
          Email Address{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="formbold-form-input"
        />
      </div>
      <div className="flex flex-wrap formbold--mx-3">
        <div className="w-full sm:w-half formbold-px-3">
          <div className="formbold-mb-5 w-full">
            <label htmlFor="date" className="formbold-form-label">
              {" "}
              Date{" "}
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="formbold-form-input"
            />
          </div>
        </div>
        <div className="w-full sm:w-half formbold-px-3">
          <div className="formbold-mb-5">
            <label htmlFor="time" className="formbold-form-label">
              {" "}
              Time{" "}
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="formbold-form-input"
            />
          </div>
        </div>
      </div>
      <div className="formbold-mb-5 formbold-pt-3">
        <label className="formbold-form-label formbold-form-label-2">
          Address Details
        </label>
        <div className="flex flex-wrap formbold--mx-3">
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <input
                type="text"
                name="area"
                id="area"
                placeholder="Enter area"
                className="formbold-form-input"
              />
            </div>
          </div>
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city"
                className="formbold-form-input"
              />
            </div>
          </div>
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state"
                className="formbold-form-input"
              />
            </div>
          </div>
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <input
                type="text"
                name="post-code"
                id="post-code"
                placeholder="Post Code"
                className="formbold-form-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="formbold-btn">Book Appointment</button>
      </div>
    </form>
  </div>
</div>

  )
}

export default ContactUs