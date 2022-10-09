import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/Home"
import {Navbar} from "./Componets/Navbar/Navbar";
import Error from "./Pages/Error/Error";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

export default function App() {
  return (
      <Router>
          <Navbar/>
            <Routes>
              <Route
              path="/"
              element={<Home/>}
              />
                <Route
                path="/*"
                element={<Error/>}
                />
                <Route
                    path="/signup"
                    element={<Signup/>}
                />
                <Route
                    path="/login"
                    element={<Login/>}
                />
            </Routes>
      </Router>
  );
}

