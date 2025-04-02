import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/Authpage.css"
import pic from "../../assets/profile/profile.jpg"

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Sadikali Khorajiya",
        email: "sadikalikhorajiya20@example.com",
        phone: "9879590440",
        location: "Ahmdabad, Gujarat",
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
  return (
    <>
      <div className="profile-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="profile-card"
            >
                <img src={pic} alt="Profile" className="profile-pic" />
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-info"><FaEnvelope /> {profile.email}</p>
                <p className="profile-info"><FaPhone /> {profile.phone}</p>
                <p className="profile-info"><FaMapMarkerAlt /> {profile.location}</p>

                {isEditing && (
                    <div className="edit-fields form-control">
                        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
                        <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" />
                        <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
                        <input type="text" name="location" value={profile.location} onChange={handleChange} placeholder="Location" />
                    </div>
                )}

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="edit-btn"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    <FaUserEdit /> {isEditing ? "Save" : "Edit Profile"}
                </motion.button>
            </motion.div>
        </div>
    </>
  )
}

export default Profile
