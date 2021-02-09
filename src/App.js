import "./App.scss";
import FocusPage from "./pages/Focus/FocusPage";
import HomePage from "./pages/Home/HomePage";
import LearnPage from "./pages/Learn/LearnPage";
import PackPage from "./pages/Pack/PackPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/focus" exact component={FocusPage} />
        <Route path="/pack" exact component={PackPage} />
        <Route path="/learn" exact component={LearnPage} />
      </Switch>
    </div>
  );
}

export default App;
