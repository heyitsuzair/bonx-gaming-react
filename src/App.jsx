import "./App.css";
import Home from "./pages/home";
import { Navbar, ProgressBar } from "./inc/components/commons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesPath } from "./inc/config";
import { useState } from "react";

function App() {
  /**
   * State For Progress
   */
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <ProgressBar progress={progress} />
      <Router>
        <Navbar />
        <Routes>
          <Route path={RoutesPath.home} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
