import React from "react";
import ReactDOM from "react-dom/client";
import ReactPwa from "react-pwa-app";
import { reactLocalStorage } from "reactjs-localstorage";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactPwa
    test //is to install in localhost, not required
    config={{
      swUrl: "./service-worker.js", // sw file in public default is service-worker.js
      onUpdate: (reg) => {
        console.log(reg);
      },
      onSuccess: (reg) => {
        console.log(reg);
      },
      onError: (reg) => {
        console.log(reg);
      },
      onPrompt: (e) => {
        if (e.outcome === "accepted") {
          console.log("user click on install and accept");
          reactLocalStorage.set("alloExplorePWA", "INSTALLED");
        }
        if (e.outcome === "dismissed") {
          console.log("user click on install and refuse");
        }
      },
    }}
  >
    <App />
  </ReactPwa>
);
