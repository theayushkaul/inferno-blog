import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Logout from "./Components/Logout"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Home from "./HomePage/Home"
import Write from "./Write/Write"
function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/write" element={<Write/>} />
            <Route exact path="/logout" element={<Logout/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
