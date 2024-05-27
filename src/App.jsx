import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Join from "./pages/joinTeam/Join";
import Service from "./pages/ourServices/Service";
import About from "./pages/aboutUs/About";
import ScrollToTop from "./ScroolToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/contact" element={<Contact></Contact>}></Route>
            <Route exact path="/joinTeam" element={<Join></Join>}></Route>
            <Route
              exact
              path="/ourServices"
              element={<Service></Service>}
            ></Route>
            <Route exact path="/aboutUs" element={<About></About>}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
