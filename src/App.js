import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import rocket from './images/rocket.gif';
import p1 from './images/planet1.png';
import p2 from './images/planet2.png';
import p5 from './images/planet5.png';
import p6 from './images/planet6.png';
import p8 from './images/planet8.png';
import p9 from './images/planet9.png';
import p10 from './images/planet10.png';
import p11 from './images/planet11.png';

function App() {
  
  const animate=useWebAnimations({
    keyframes:[
      {transform:"translate(100%)"},
      {transform:"translate(-100%)"}
    ],
    timing:{
      duration: 12000,
      iterations: Infinity,
      playbackRate: -2
    }
  });

  return (
    <div onClick={() => animate.getAnimation().updatePlaybackRate(animate.getAnimation().playbackRate * 1.2)}>
      <div className="wrapper">  
        <div className="rocket">
            <img src={rocket} alt="rocket" id="character"/>
        </div> 

        <div ref={animate.ref} className="background" id="background">
            <img src={p1} alt="planet1" id="planet1"/>
            <img src={p2} alt="planet2" id="planet2"/>
            
            <img src={p5} alt="planet5" id="planet5"/>
            <img src={p6} alt="planet6" id="planet6"/>
            
            <img src={p8} alt="planet8" id="planet8"/>
            <img src={p9} alt="planet9" id="planet9"/>
            <img src={p10} alt="planet10" id="planet10"/>
            <img src={p11} alt="planet11" id="planet11"/>
        </div>
      </div>
    </div>
  );
}

export default App;
