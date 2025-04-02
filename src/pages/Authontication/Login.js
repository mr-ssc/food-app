
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "../../styles/Authpage.css"
function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
  return (
    <>
       <div className="auth-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="auth-box"
            >
                <h2 className="auth-title">
                    {isSignUp ? "Create Account" : "Sign In"}
                </h2>
                <form className="auth-form">
                    {isSignUp && (
                        <div className="input-group">
                            <FaUser className="input-icon" />
                            <input type="text" placeholder="Full Name" className="input-field" />
                        </div>
                    )}
                    <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input type="email" placeholder="Email" className="input-field" />
                    </div>
                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="Password" className="input-field" />
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="auth-button"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </motion.button>
                </form>
                <p className="auth-toggle" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </p>
            </motion.div>
        </div>
    </>
  )
}

export default Login
