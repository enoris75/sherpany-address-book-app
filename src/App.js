import React from "react";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Grid from "./components/usersGrid";
import { Header } from "./components/PageHeader";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-content">
          <Grid />
        </div>
      </div>
    </Provider>
  );
}

export default App;
