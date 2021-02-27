import React, { Component } from "react";
import logo from "./images/logo192.png";
import ironLogo from "./images/ironhack-logo.svg";
import menu from "./images/menu-top.svg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="firstHalf">
            <ul>
              <li>
                {" "}
                <img src={ironLogo} alt="ironlogo" />
              </li>
              <li>
                <img src={menu} alt="ironlogo" />
              </li>
            </ul>
            <div>
              <h1 className="title">
                Say hello to<br></br> ReactJS
              </h1>
              <p className="pTitle">
                You will learn a Frontend<br></br> framework from scratch, to
                <br></br> become an Ninka Developer.
              </p>
              <button className="bTitle">Awesome!</button>
            </div>
            <ul>
              <li>
                <img src={logo} className="App-logo" alt="logo" />
              </li>
              <li>
                <img src={logo} className="App-logo" alt="logo" />
              </li>
              <li>
                <img src={logo} className="App-logo" alt="logo" />
              </li>
              <li>
                <img src={logo} className="App-logo" alt="logo" />
              </li>
            </ul>
          </div>

          <ul className="iconsUl">
            <li>
              <div className="iconLi">
                <img src={icon1} className="icon" alt="icon1" />
                <h3>Declarative</h3>
                <p className="listP">
                  React makes it<br></br> painless to create<br></br>
                  interactive UIs.
                </p>
              </div>
            </li>
            <li>
              <div className="iconLi">
                <img src={icon2} className="icon" alt="icon2" />
                <h3>Components</h3>
                <p className="listP">
                  Build encaplused<br></br> components that<br></br> manage
                  their state.
                </p>
              </div>
            </li>
            <li>
              <div className="iconLi">
                <img src={icon3} className="icon" alt="icon3" />
                <h3>Single-Way</h3>
                <p className="listP">
                  A set of immutable<br></br> values are passed to<br></br> the
                  components
                </p>
              </div>
            </li>
            <li>
              <div className="iconLi">
                <img src={icon4} className="icon" alt="icon4" />
                <h3>JSX</h3>
                <p className="listP">
                  Statically-typed<br></br> designed to run on<br></br> modern
                  browsers
                </p>
              </div>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
