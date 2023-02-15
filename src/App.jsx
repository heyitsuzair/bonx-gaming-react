import {
  MainFooter,
  Navbar,
  PreFooter,
  ProgressBar,
  ReactToastifyContainer,
} from "./inc/components/commons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesPath } from "./inc/config";
import { useState } from "react";
import Body from "./Body";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Games } from "./pages/games";
import { GameDetails } from "./pages/game_details";
import ScrollToTop from "./ScrollToTop";
import DisableClick from "./DisableClick";
import { Login, Signup } from "./pages/auth";
import { Main } from "./pages/dashboard";
import AuthState from "./inc/context/auth";

function App() {
  /**
   * State For Progress
   */
  const [progress, setProgress] = useState(0);

  return (
    <Body>
      <ProgressBar progress={progress} />
      <Router>
        <AuthState>
          <Navbar setProgress={setProgress} />
          <ReactToastifyContainer />
          <ScrollToTop />
          <DisableClick />
          <Routes>
            {/* <-------------- App --------------> */}
            <Route
              path={RoutesPath.home}
              element={<Home setProgress={setProgress} />}
            />
            <Route
              path={RoutesPath.contact}
              element={<Contact setProgress={setProgress} />}
            />
            <Route
              path={RoutesPath.games}
              element={<Games setProgress={setProgress} />}
            />
            <Route
              path={`${RoutesPath.games}/:id`}
              element={<GameDetails setProgress={setProgress} />}
            />
            {/* <-------------- App --------------> */}

            {/* <-------------- Auth --------------> */}
            <Route
              path={RoutesPath.signup}
              element={<Signup setProgress={setProgress} />}
            />
            <Route
              path={RoutesPath.login}
              element={<Login setProgress={setProgress} />}
            />
            {/* <-------------- Auth --------------> */}

            {/* <-------------- Dashboard --------------> */}
            <Route
              path={RoutesPath.dashboard.index}
              element={<Main setProgress={setProgress} />}
            />
            {/* <-------------- Dashboard --------------> */}
          </Routes>
          <PreFooter />
          <MainFooter />
        </AuthState>
      </Router>
    </Body>
  );
}

export default App;
