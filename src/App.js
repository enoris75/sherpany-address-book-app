import React from "react";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Grid from "./components/usersGrid";
import { Header } from "./components/PageHeader";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Grid />
      </div>
    </div>
  );
}

export default App;
