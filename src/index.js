import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadNextBatch } from "./services/userService";

// Load the first batch of users as the app starts
loadNextBatch();

ReactDOM.render(<App />, document.getElementById("root"));
