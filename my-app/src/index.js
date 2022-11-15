import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./screens/Router"
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDL6roN0e_07EUfJfsNiW-VLjLRge2GLdk",
  authDomain: "larroni.firebaseapp.com",
  projectId: "larroni",
  storageBucket: "larroni.appspot.com",
  messagingSenderId: "924597622130",
  appId: "1:924597622130:web:d0385e8842b101e80af9eb",
  measurementId: "G-ZH72TTX9WB"
};
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
