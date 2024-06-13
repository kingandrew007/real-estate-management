import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const data = { contactName: '', contactEmail: '', contactPhone: '', contactMessage: '' };
  const [inputData, setInputData] = useState(data);

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!inputData.contactName || !inputData.contactEmail || !inputData.contactMessage || !inputData.contactPhone) {
      alert("All fields are mandatory. Please fill out all fields.");
      return;
    }

    try {
      alert("Your response has been recorded. Our team will contact you ASAP!");
      await axios.post("http://localhost:8000/contact", inputData);
    } catch (err) {
      alert("Check your details kindly.");
    }
  };

  return (
    <div className="container-contact">
      <div className="row-contact">
        <div className="col-contact">
          <h1>Contact Us</h1>
          <div className="container-contact">
            <form onSubmit={handleSubmit}>
              <div className="row-contact">
                <div className="col-contact">
                  <input type="text" className="form-control-contact" onChange={handleOnChange} placeholder='Name' name='contactName' required />
                </div>
                <div className="col-contact">
                  <input type="email" className="form-control-contact" onChange={handleOnChange} placeholder='Email' name='contactEmail' required />
                </div>
                <div className="col-contact">
                  <input type="text" className="form-control-contact" onChange={handleOnChange} placeholder='Phone number' name='contactPhone' required />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-contact">
                  <textarea className="form-control-contact" placeholder="Message" onChange={handleOnChange} name='contactMessage' rows="5" required></textarea>
                </div>
              </div>
              <div className="row-contact mt-3">
                <div className="col-contact">
                  <button type="submit" className="btn-contact btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-contact">
          {/* Additional content in the second column if needed */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
