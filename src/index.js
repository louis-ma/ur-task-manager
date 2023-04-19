import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';

import Timer from "./Timer";

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<Timer />);

//timer component, uses TimerStyles.css, Timer.jsx
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Timer />
  </StrictMode>,
  rootElement
  ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();