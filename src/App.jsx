import "./App.css";
import Home from "./pages/home";
import {
  MainFooter,
  Navbar,
  PreFooter,
  ProgressBar,
} from "./inc/components/commons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesPath } from "./inc/config";
import { useState } from "react";
import Body from "./Body";
import { Contact } from "./pages/contact";

function App() {
  /**
   * State For Progress
   */
  const [progress, setProgress] = useState(0);

  return (
    <Body>
      <ProgressBar progress={progress} />
      <Router>
        <Navbar setProgress={setProgress} />
        <Routes>
          <Route
            path={RoutesPath.home}
            element={<Home setProgress={setProgress} />}
          />
          <Route
            path={RoutesPath.contact}
            element={<Contact setProgress={setProgress} />}
          />
        </Routes>
        <PreFooter />
        <MainFooter />
      </Router>
    </Body>
  );
}

export default App;
