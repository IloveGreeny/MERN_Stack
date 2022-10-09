import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CountryContextProvider} from "./Context/CountryContext/CountryContext";
import {AuthContextProvider} from "./Context/AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CountryContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </CountryContextProvider>
    </React.StrictMode>
);

