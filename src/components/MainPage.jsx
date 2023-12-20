import React, { useState, useEffect, useContext } from "react";

import Registration from "./Registration";
import Login from "./Login";
import Navbar from "./Navbar";
import CreateSession from "./CreateSession";
import LoadPhoto from "./LoadPhoto";

import { UserContext } from "../context/UserContext";

const MainPage = () => {
    const [message, setMessage] = useState("");
    const [token] = useContext(UserContext);

    const getWelcomeMessage = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("http://127.0.0.1:56000/welcome", requestOptions);
        const data = await response.json();

        if (response.ok === false) {
            console.log("something messed up");
        } else {
            setMessage(data.message);
        }
    };

    useEffect(() => {
        getWelcomeMessage();
    }, []);
    return (
        <>
            <Navbar title={message} />
            <div className="columns">
                <div className="column"></div>
                <div className="column m-5 is-two-thirds">
                    {!token ? (
                        <div className="columns">
                            <Registration /> <Login />
                        </div>
                    ) : (
                        <div className="columns">
                            <CreateSession /> <LoadPhoto />
                            <div className="columns">  </div>
                        </div>
                    )}
                </div>
                <div className="column"></div>
            </div>
            <div>
            </div>
        </>
    )
};

export default MainPage;