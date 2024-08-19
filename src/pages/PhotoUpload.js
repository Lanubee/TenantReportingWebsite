import React, { useState } from "react";

export const PhotoUpload = () => {
    const [file, setFile] = useState();

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div className="uploadImage">
            <h2>Upload image:</h2>
            <input type="file" onChange={handleChange}/>
            <img src={file} />
        </div>
    );
}

export default PhotoUpload;