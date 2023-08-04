import {useEffect,useState} from 'react'
import "./Home.css"
import Header from "../../Components/header/Header"
import Sidebar from "../../Components/Sidebar/sidebar"
import Posts from "../../Components/Posts/posts"
import axios from 'axios'
import { useLocation } from 'react-router-dom'
export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(()=>{
      const fetchPosts = async()=>{
        const res = await axios.get("/posts"+search)
        setPosts(res.data)
      }
      fetchPosts()
  },[search])
  return (
    <>
      <Header/>
    <div className='home'>
      <Posts posts = {posts}/>
      <Sidebar/>
    </div>
    </>
    
  )
}
