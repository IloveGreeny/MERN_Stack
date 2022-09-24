import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home"
import { Navbar } from "./Componets/Navbar/Navbar";

export default function App() {
  return (
      <Router>
          <Navbar/>
            <Routes>
              <Route
              path="/"
              element={<Home/>}
              />
            </Routes>
      </Router>
  );
}

