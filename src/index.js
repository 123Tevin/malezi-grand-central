import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import { ToastProvider } from "react-toast-notifications";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <ToastProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ToastProvider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
