import { Link } from "react-router-dom";
import "./Navbar.css";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineSearch, AiOutlineWhatsApp} from "react-icons/ai"
import { useContext } from "react";
import { Context } from "../../context/context";
export default function Topbar() {
  const {user,dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon"><AiOutlineInstagram/></i>
        <i className="topIcon"><AiOutlineGithub/></i>
        <i className="topIcon"><AiFillLinkedin/></i>
        <i className="topIcon"><AiOutlineWhatsApp/></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src= {PF+user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon"><AiOutlineSearch/></i>
      </div>
    </div>
  );
}
