import React from 'react';
import './App.css';
import Home from "./home";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </div>
    );
}

export default App;
