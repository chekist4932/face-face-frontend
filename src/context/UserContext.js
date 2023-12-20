import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("fefu-card"));
    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };

            const response = await fetch("http://127.0.0.1:56000/users/me", requestOptions);
            console.log(`UserContext`, response.json());
            if (response.ok === false) {
                setToken(null);
            }
            localStorage.setItem("fefu-card", token);
        };

        fetchUser();
    }, [token]);

    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    );
};