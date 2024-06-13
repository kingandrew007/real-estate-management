import React, { useState } from 'react';
import axios from 'axios';
import './Listing.css';

function ListingTest() {
  const data = { name: '', price: '', type: '', place: '', image: '' };
  const [inputData, setInputData] = useState(data);

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    if (!inputData.name || !inputData.price || !inputData.type || !inputData.place || !inputData.image) {
      alert("All fields are mandatory. Please fill out all fields.");
      return;
    }
  
    try {
      await axios.post("http://localhost:8000/listing-property", inputData);
      alert("Property listed successfully!");
    } catch (err) {
      alert("Failed to list property. Please check your details.");
    }
  };
  
  return (
    <>
     <>
  
  <div className='container-listing'>
    <form className="property-form-listing" onSubmit={handleSubmit}>
  <h1 className="title-listing" style={{ marginBottom: '15px' }}>List Your Property</h1>
      <div className="form-group-listing">
        <input type="text" onChange={handleOnChange} name='name' className="form-control-listing" placeholder='Enter your name' />
      </div>
      <div className="form-group-listing">
        <input type="text" onChange={handleOnChange} name='price' className="form-control-listing" placeholder='Price' />
      </div>
      <div className="form-group">
        <input type="text" onChange={handleOnChange} name='type' className="form-control-listing" placeholder='Enter the type of house' />
      </div> <br />
      <div className="form-group">
        <input type="text" onChange={handleOnChange} name='place' className="form-control-listing" placeholder='Enter the place' />
      </div> <br />
      <div className="form-group">
        <input type="text" onChange={handleOnChange} name='image' className="form-control-listing" placeholder='Enter the image URL' />
      </div> <br />
      <button type="submit" className="btn-listing btn-primary">List Now</button>
    </form>
  </div>
</>

    </>
  );
}

export default ListingTest;
