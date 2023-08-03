import { Link } from "react-router-dom";
import "./Navbar.css";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineSearch, AiOutlineWhatsApp} from "react-icons/ai"
export default function Topbar(props) {
  const user = props.user;
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
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
