import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
