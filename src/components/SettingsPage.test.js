import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Settings } from "./SettingsPage";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initialState = {
  users: [],
  usersLoaded: 0,
  cachedUsers: [],
  isLoading: false,
  latestError: null,
  filter: null,
  nationalityFilter: ["CH", "ES", "GB", "FR"],
};
const store = mockStore(initialState);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Settings />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
