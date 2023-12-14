// Importing necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

// Creating a React root to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application within the React root
root.render(
  <BrowserRouter>
    {/* Wrapping the entire application with React Strict Mode for additional checks */}
    <React.StrictMode>
      {/* Providing the Redux store to the entire application using the Provider */}
      <Provider store={store}>
        {/* Rendering the main App component */}
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
