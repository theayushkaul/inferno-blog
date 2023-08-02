import React from 'react'
import "./Home.css"
import Header from "../Components/header/Header"
import Sidebar from "../Components/Sidebar/sidebar"
import Posts from "../Components/Posts/posts"
export default function Home() {
  return (
    <>
      <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
    
  )
}
