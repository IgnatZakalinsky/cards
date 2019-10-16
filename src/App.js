import React from 'react';
import './App.css';
import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    debugger
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Home/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
