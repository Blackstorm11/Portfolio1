import React from 'react'
import "./first.css"
import one from "../../assets/users.gif"
import dark from "../../assets/1666508301756.png"
import video from "../../assets/alb_vdbk0409_1080p.mp4"


const first = () => {
      function myFunction() {
        var element=document.body;
        element.classList.toggle("dark-mode")
      }
      

  return (
    <div class="hero">
      <div class="row row-cols-2 row-cols-md-3 g-3 ">
      <div class="container">
      <div class="details">
          <h1> Hi, this is <span>O</span>
                <span>m</span>
                <span>k</span>
                <span>a</span>
                <span>r</span><span> </span>
           <span class="s">R</span>
                <span>e</span>
                <span>d</span>
                <span>k</span>
                <span>a</span>
                <span>r</span>
               
                
          </h1>
          <p> This is my official portfolio website to show all
          details and kowledge i have</p>
          
        <a href="#"> DOWNLOAD CV</a>
      </div>
      <div class="images">
        {/* <img src={two} class="me3"/>
        <img src={three} class="me4"/> */}
        
        {/* <img src={mine} class="me1"/> */}
       
        {/* <img src={one} class="me"/> */}
        <img src={dark} class="me3"/>
        
        
       
        
      
        
      </div>
      </div>
      </div>
                
      {/* <section >
          <video src={video} autoPlay loop muted></video>
          <h2>Omkar</h2>
      </section> */}
    </div>
 
        

  )
}
export default first;
