import React from 'react';
import logo from './logo.svg';
import './App.css';
import top1 from "./resources/top1.jpg";
import top2 from "./resources/top2.jpg";
import laisaIcon from "./resources/laisa.png";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

class Main extends React.Component {
  render(){
    return(
      <div>
        <div class="top">
          <h1>--post apocalypse--</h1>
          <img src={top2} alt="post apocalypse"/>
        </div>
        <hr />
        <div class="raison">
          <h1>--raison d'être--</h1>
          <p>To make my dream come true</p>
        </div>
        <hr />
        <div class="dream">
          <h1>--dream--</h1>
          <p>Illustlrator</p>
          <p>proProgrammer</p>
        </div>
        <hr />
        <div class="profile0">
          <h1>--profile--</h1>
          <div class="profile1">
            <img src={laisaIcon} alt="laisa" />
            <div class="profile2">
              <p>Mikazuki Laisa</p>
              <p>React, unity, Illust, nginx</p>
              <p>js, c#, css</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="links">
          <h1>-links-</h1>
        </div>
      </div>
    )   
  }
}

export default App;
