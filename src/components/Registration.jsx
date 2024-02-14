import React, { useState } from "react";

import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

import { backend_url } from "../config";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [succesMessage, setSuccessMessage] = useState("");


    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password, username: username}),
        };

        const response = await fetch(`${backend_url}auth/register`, requestOptions);
        const data = await response.json();
        console.log('Registration', data);
        if (!response.ok) {
            setSuccessMessage('');
            setErrorMessage(data.detail);
        } else {
            setErrorMessage('');
            setSuccessMessage('Registration success');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmationPassword && password.length > 5) {
            submitRegistration();
        } else {
            setErrorMessage(
                "Ensure that the passwords match and greater than 5 characters"
            );
        }
    };

    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Register</h1>
                
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            type="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={confirmationPassword}
                            onChange={(e) => setConfirmationPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <ErrorMessage message={errorMessage} />
                <SuccessMessage message={succesMessage} />
                <br />
                <button className="button is-primary" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;