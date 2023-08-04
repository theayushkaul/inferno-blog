import { Link } from "react-router-dom";
import "./sidebar.css";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { useEffect, useState } from "react";
import axios from 'axios';
export default function Sidebar() {
    const [cats,setCats] = useState([]);
     useEffect(()=>{
        const fetchCats = async ()=>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        fetchCats()
     },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://source.unsplash.com/random/?person"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li className="sidebarListItem" key={c.name}>
                            <Link className="link" to={`/?cat=${c.name}`}>{c.name}</Link>
                        </li>))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon"><AiOutlineInstagram /></i>
                    <i className="sidebarIcon"><AiOutlineGithub /></i>
                    <i className="sidebarIcon"><AiFillLinkedin /></i>
                    <i className="sidebarIcon"><AiOutlineWhatsApp /></i>
                </div>
            </div>
        </div>
    );
}