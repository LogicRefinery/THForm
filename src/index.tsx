import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./msw/browser");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  );
});

reportWebVitals();
