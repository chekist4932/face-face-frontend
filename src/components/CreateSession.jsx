import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

import { backend_url } from "../config";

const CreateSession = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [surname, setSurname] = useState("");

    const [firstCorpNumber, setFirstCorpNumber] = useState("");
    const [secondCorpNumber, setSecondCorpNumber] = useState("");

    const [token,] = useContext(UserContext);

    const [errorMessage, setErrorMessage] = useState("");
    const [succesMessage, setSuccessMessage] = useState("");

    const submitCreateSession = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'accept': 'application/json',
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ name: name, last_name: lastName, surname: surname, first_corp_number: firstCorpNumber, second_corp_number: secondCorpNumber }),
        };

        const response = await fetch(`${backend_url}session`, requestOptions);
        const data = await response.json();
        console.log('Create Session', data);
        if (!response.ok) {
            setSuccessMessage('');
            setErrorMessage(data.detail);
        } else {
            setErrorMessage('');
            setSuccessMessage('Session created');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submitCreateSession();
        const collection_south = ['9', '10', '11'];
        const collection_north = ['2.4', '2.5', '2.6', '2.7', '6.1', '6.2', '7.1', '7.2', '8.1', '8.2'];

        if (secondCorpNumber === '0' && collection_south.includes(firstCorpNumber)) {
            submitCreateSession();
        }
        else if (collection_north.includes(firstCorpNumber + '.' + secondCorpNumber)) {
            submitCreateSession();
        }
        else {
            setErrorMessage(
                "Incorrect Corp Numbers. Examples: 6 1, 8 2, 10 0, 11 0"
            );
        }
    };

    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Create Session</h1>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            type="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                        <input
                            type="last_name"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Surname</label>
                    <div className="control">
                        <input
                            type="surname"
                            placeholder="Enter Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">First Corp Number</label>
                    <div className="control">
                        <input
                            type="first_corp_number"
                            placeholder="Enter First Corp Number"
                            value={firstCorpNumber}
                            onChange={(e) => setFirstCorpNumber(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Second Corp Number</label>
                    <div className="control">
                        <input
                            type="second_corp_number"
                            placeholder="Enter Second Corp Number"
                            value={secondCorpNumber}
                            onChange={(e) => setSecondCorpNumber(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                
                <ErrorMessage message={errorMessage} />
                <SuccessMessage message={succesMessage} />
                <br />
                <button className="button is-primary" type="submit">
                    Create Session
                </button>
            </form>
        </div>
    );
};

export default CreateSession;