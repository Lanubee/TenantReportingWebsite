import React, {Component} from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";

import App from "./App";
import Details from "./pages/Details";
import HomePage from "./pages/homePage";

export const RoutesUrl = () => {
    
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/Details" element={<Details />}/>
            </Routes>
        </Router>
        )
}
