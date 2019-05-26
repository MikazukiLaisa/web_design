import React from 'react';
import logo from './logo.svg';
import './App.css';
import top2 from "./resources/top2.jpg";
import laisaIcon from "./resources/laisa.png";
import twitter from "./resources/twitter4.png";
import github from "./resources/github3.png";
import hatebu from "./resources/hatebu.svg";
import qiita from "./resources/qiita.png";
import pixiv from "./resources/pixiv.png";
import ff14 from "./resources/ff14_2.png";


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
        <div class="scroll raison">
          <h1>--raison d'être--</h1>
          <p>To enjoy now.</p>
        </div>
        <hr />
        <div class="scroll dream">
          <h1>--dream--</h1>
          <p>Illustrator</p>
          <p>proProgrammer</p>
        </div>
        <hr />
        <div class="scroll profile0">
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
        <div class="scroll links0">
          <h1>--links--</h1>
          <div class="links1">
            <Button css="links2" img={twitter} link="https://twitter.com/Mikazuki_Laisa?lang=ja" alt="twitter" />
            <Button css="links2" img={github} link="https://github.com/MikazukiLaisa" alt="github" />
            <Button css="links2" img={qiita} link="https://qiita.com/Mikazuki_Laisa" alt="qiita" />
            <Button css="links2" img={hatebu} link="http://b.hatena.ne.jp/Mikazuki_Laisa/bookmark" alt="hatena_bookmark" />
            <Button css="links2" img={pixiv} link="https://www.pixiv.net/member.php?id=8383999" alt="pixiv" />
            <Button css="links2" img={ff14} link="https://jp.finalfantasyxiv.com/lodestone/character/23125854/" alt="ff14" />
          </div>
        </div>
        <hr />
        <div class="footer">
          <h2>Mikazuki Laisa 2019 All right reserved.</h2>
        </div>
      </div>
    )   
  }
}

class Button extends React.Component{
  render(){
    return(
      <div class={this.props.css}>
        <a href={this.props.link}>
          <img src={this.props.img} alt={this.props.alt}/>
        </a>
    </div>
    )
  }
}


export default App;
