import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

import { backend_url } from "../config";

const LoadPhoto = () => {

    const [fileInput, setFileInput] = useState("");
    const [fileInputFormData,] = useState(new FormData());
    const [statusMessage, setStatusMessage] = useState("");
    const [flagMessage, setFlagMessage] = useState(false);

    const [token,] = useContext(UserContext);

    const submitLoadPhoto = async () => {

        const requestOptions = {
            method: "POST",
            headers: {
                'accept': 'application/json',
                Authorization: "Bearer " + token
            },
            body: fileInputFormData,
        };
        const response = await fetch(`${backend_url}photo`, requestOptions);
        const data = await response.json();
        console.log('Load Photo', data);
        if (!response.ok) {
            setFlagMessage(true);
            setStatusMessage(data.detail);
        } else {
            setFlagMessage(false);
            setStatusMessage('Load photo success');
        }
    };

    // function getBase64(file) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         console.log(reader.result);
    //         setFileInput(reader.result);
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };



    const handleFile = (e) => {
        e.preventDefault();
        console.log(fileInput);


        if (307200 && fileInput.size > 307200) {
            setFlagMessage(true);
            setStatusMessage("File is too large.");
        }
        else {
            fileInputFormData.set('file', fileInput);
            submitLoadPhoto();
        }

    }

    return (
        <div>
            <form className="box" onSubmit={handleFile}>
                <h1 className="title has-text-centered">Load Photo</h1>
                <div className="field">
                    <div className="control">
                        <input
                            id="image-input"
                            type="file"
                            accept=".png,.jpg,.jpeg,.gif"
                            onChange={(e) => { setFileInput(e.target.files[0]) }}
                            className="input"
                            required
                        />
                    </div>
                </div>
                {
                    flagMessage ? (<SuccessMessage message={statusMessage} />)
                        : (<ErrorMessage message={statusMessage} />)
                }
                <br />
                <button className="button is-primary" type="submit">Load Photo</button>
            </form>

        </div>
    );
};

export default LoadPhoto;