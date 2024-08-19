import React, {Component} from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";

import App from "./App";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import PhotoUpload from "./pages/PhotoUpload";

export const RoutesUrl = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to = "/Home"/>}/>
                <Route path="/Home" element={<HomePage />}/>
                <Route path="/Details" element={<Details />}/>
                <Route path="/PhotoUpload" element={<PhotoUpload />}/>
            </Routes>
        </Router>
        )
}
