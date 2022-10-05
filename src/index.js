import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { hydrate, render } from 'react-dom';
 
const APP = (<ContextProvider>
  <App />
</ContextProvider>)
  

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// ReactDOM.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
//   document.getElementById("root")
// );
