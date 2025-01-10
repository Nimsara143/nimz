import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"; // Import CSS for styling

const Login = ({ setUserProfile }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);

            // Extract first two letters of email as "profile icon"
            const profileLetters = email.substring(0, 2).toUpperCase();
            setUserProfile(profileLetters);

            navigate("/"); // Redirect to the landing page
        } catch (err) {
            setError("Failed to login. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <Link to="/" className="close-button">
                Close
            </Link>
        </div>
    );
};

export default Login;

