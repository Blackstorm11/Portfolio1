import React from "react";
import "./card_one.css"
import { AnimationOnScroll } from "react-animation-on-scroll";
import {handleHateClick , handleLoveClick} from "./cards.js";
import "./cards.css";


const Home = () => {

  
  setTimeout(function(){
    document.getElementById('item1').style.visibility="visible";
  },2500);
  setTimeout(function(){
    document.getElementById('item').style.visibility="hidden";
  },2500);
  setTimeout(function(){
    document.getElementById('p').style.visibility="visible";
  },5000);
  setTimeout(function(){
    document.getElementById('cardOne').style.visibility="visible";
  },5000);
  setTimeout(function(){
    document.getElementById('cardTwo').style.visibility="visible";
  },5000);
  
  // animation(function(){useEffect(()=> {
  //   AOS.init({duration: 2000});
  // }, []);});
  
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
    const handleLoveClick = () => {
    // bump active index 
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
            //active  group becomes after
    currentGroup.dataset.status = "after";
      //next group becomes active
    nextGroup.dataset.status="becoming-active-from-before";

    setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex
    });

}

    const handleHateClick = () => {
        const nextIndex=activeIndex -1 >= 0 ? activeIndex -1 :groups.length -1;

        const currentGroup= document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "before";
           //next group becomes active
    nextGroup.dataset.status="becoming-active-from-after";

    setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex
    });
}

    



    

 

  return (
    <><div class="row row-cols-2 row-cols-md-3 g-3 ">
      
      
        <div class="box1">
            <div class="a">
              <div id='item'></div>
              <div id="item1"><h1>My profile</h1><p id='p'>I, am Student of SRIEIT pursuing bachelors of Computer Engineering , having serious passion for UI effects, animation and creating intuitive ,dynamic user experiences.
with experience in creating Websites ,Web-Applications using Nestjs, ReactJs and PostgresSQL.
Also seeking opportunities to expand my technical and practical skills on different technologies..
</p></div>
            </div>
            <div class="c">
                amazing
            </div>
          </div>
          <div class="hidden ">
                <div class="cards">
                  <div class="circle">
                    <h2>01</h2>
                    </div>
                    <div class="content">
                      <p>knowlwdge about Nodejs and type script.being omkaer is the best thing u can do.</p>
                      <a href="#">Read more</a>
                    </div>
                </div>
                <div class="cards">
                  <div class="circle">
                    <h2>02</h2>
                    </div>
                    <div class="content">
                    <p>knowlwdge about Nodejs and type script.being omkaer is the best thing u can do.</p>
                      <a href="#">Read more</a>
                    </div>
                
                </div>
                <div class="cards">
                  <div class="circle">
                    <h2>03</h2>
                    </div>
                    <div class="content">
                    <p>knowlwdge about Nodejs and type script.being omkaer is the best thing u can do.</p>
                      <a href="#">Read more</a>
                    </div>
                
                </div>
          </div>
          {/* 3rd */}
          <div class="box"><h1>Blob animation</h1>
            <div class="blob"/>
        </div>
        <div id="|" class="box2"><h1 class="attention"> -- Hover on it</h1>
             <div class="loader" >
                    <span style={{"--i":1}}></span>
                    <span style={{"--i":2}}></span>
                    <span style={{"--i":3}}></span>
                    <span style={{"--i":4}}></span>
                    <span style={{"--i":5}}></span>
                    <span style={{"--i":6}}></span>
                    <span style={{"--i":7}}></span>
                    <span style={{"--i":8}}></span>
                    <span style={{"--i":9}}></span>
                    <span style={{"--i":10}}></span>
                   
                   
                    

                    
             </div></div>  <div class="body1">
             <section> -- Hover on it</section>
             <div class="card-swipper">
        <div class="card-groups">
            <div class="card-group" data-index="0" data-status="active">
                <div class="small-card card">

                </div>
                <div class="big-card card">

                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                
            </div>
            <div class="card-group" data-index="1" data-status="unknown">
                <div class="small-card card">

                </div>
                <div class="big-card card">

                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                
            </div>
            <div class="card-group" data-index="2" data-status="unknown">
                <div class="small-card card">

                </div>
                <div class="big-card card">

                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                <div class="small-card card">

                </div>
                <div class="big-card card">
                    
                </div>
                
            </div>
        </div>

        <div class="card-swiper-buttons">
            <button onClick={handleHateClick} id="hate-button" type="button" title="Accept">
                
            </button>
            <button onClick={handleLoveClick} id="love-button" type="button" title="Accept">
               
            </button>
        </div>
        
    </div></div>
        
    <script src="cards.js"></script>
        
      {/* <div class="col">

        <div class="card" id="card-content">
          
          <div class="card-body">
            <h5 class="card-title">Users</h5>
            <p class="card-text">Total Users : 50 <br/>+3 Added this month<br/>+30 added three month</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" id="card-content">
        
          <div class="card-body">
            <h5 class="card-title">Repositories</h5>
            <p class="card-text">Total Public Repos: 20 <br/>10 repos added this month<br/>5 existing public repos removed</p>
          </div>
        </div>
      </div>
      <div class="col mx-auto me-auto">
        <div class="card" id="card-content">
          
          <div class="card-body">
            <h5 class="card-title">Violators</h5>
            <p class="card-text">Count of violators : 10<br/>Top 3 Violators<br/>Jai<br/>Suresh<br/>Keith</p>
          </div>
        </div>
      </div> */}
</div></>
  );
};

export default Home;
