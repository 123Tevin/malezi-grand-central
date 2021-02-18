import { Switch, Route } from "react-router-dom";

import "./App.scss";
import BongoPage from "./pages/Bongo/BongoPage";
import EnterprisePage from "./pages/Enterprise/EnterprisePage";

import FocusPage from "./pages/Focus/FocusPage";
import HomePage from "./pages/Home/HomePage";
import LearnPage from "./pages/Learn/LearnPage";
import MorePage from "./pages/More/MorePage";
import PackPage from "./pages/Pack/PackPage";

import TutorPage from "./pages/Tutor/TutorPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/focus" exact component={FocusPage} />
        <Route path="/pack" exact component={PackPage} />
        <Route path="/learn" exact component={LearnPage} />
        <Route path="/tutor" exact component={TutorPage} />
        <Route path="/more" exact component={MorePage} />
        <Route path="/bongo" exact component={BongoPage} />
        <Route path="/enterprise" exact component={EnterprisePage} />
      </Switch>
    </div>
  );
}

export default App;
