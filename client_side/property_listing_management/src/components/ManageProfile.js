import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ManageProfile.css';

function ManageProfile() {
  const [userData, setUserData] = useState({ name: '', emailid: '', mobile: '' });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // if (!userId) {
    //   navigate('/login');
    //   return;
    // }

    axios.get(`http://localhost:8000/signup/${userId}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(err => console.error("Error fetching user data:", err));
  }, [userId, navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/signup/${userId}`, userData)
      .then(response => {
        alert("Profile updated successfully");
        setIsEditing(false);
      })
      .catch(err => console.error("Error updating profile:", err));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      axios.delete(`http://localhost:8000/signup/${userId}`)
        .then(response => {
          alert("Profile deleted successfully");
          localStorage.removeItem('userId');
          navigate('/signup');
        })
        .catch(err => console.error("Error deleting profile:", err));
    }
  };

  return (
    <div className="container-profile">
      <h1>Manage Profile</h1>
      <div className="profile-field">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditing}
          className="profile-input"
        />
      </div>
      <div className="profile-field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="profile-input"
        />
      </div>
      <div className="profile-field">
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className="profile-input"
        />
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button onClick={handleUpdate} className="btn btn-success">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit</button>
        )}
        <button onClick={handleDelete} className="btn btn-danger">Delete Profile</button>
      </div>
    </div>
  );
}

export default ManageProfile;
