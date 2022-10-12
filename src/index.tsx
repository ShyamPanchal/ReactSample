import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import makeStore from "./lib/store";

const appStore = makeStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore.store}>
      {/* <PersistGate loading={null} persistor={appStore.persist}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
