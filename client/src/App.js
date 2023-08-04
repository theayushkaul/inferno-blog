import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Login/Login"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Home from "./pages/HomePage/Home"
import Write from "./pages/Write/Write"
import Settings from "./pages/Settings/Settings"
import Register from "./pages/Register/Register"
import BlogPost from "./pages/BlogPost/BlogPost";
import { useContext } from "react";
import { Context } from "./context/context";
function App() {
  const {user} = useContext(Context)
  return (
    <>
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/posts" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/write" element={user ? <Write /> : <Login />} />
            <Route exact path="/settings" element={user ? <Settings /> : <Login />} />
            <Route exact path="/register" element={user ? <Home /> : <Register />} />
            <Route exact path="/login" element={user ? <Home /> : <Login />} />
            <Route exact path="/post/:id" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
