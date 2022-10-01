import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/Home"
import {Navbar} from "./Componets/Navbar/Navbar";
import Error from "./Pages/Error/Error";

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
            </Routes>
      </Router>
  );
}

