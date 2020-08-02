import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class OxGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOne: true,
      isToggleTwo: true,
      isToggleThree: true,
      isToggleFour: true,
      isToggleFive: true,
      isToggleSix: true,
      isToggleSeven: true,
      isToggleEight: true,
      isToggleNine: true,
      flag: false,
      isOne: true,
      isTwo: true,
      isThree: false,
      isFour: false,
      isFive: false,
      isSix: false,
      isSeven: false,
      isEight: false,
      isNine: false,
      play: false,
      pause: true,
    };
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickFour = this.handleClickFour.bind(this);
    this.handleClickFive = this.handleClickFive.bind(this);
    this.handleClickSix = this.handleClickSix.bind(this);
    this.handleClickSeven = this.handleClickSeven.bind(this);
    this.handleClickEight = this.handleClickEight.bind(this);
    this.handleClickNine = this.handleClickNine.bind(this);
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }
  play = () => {
    this.setState({ play: true, pause: false });
    this.audio.play();
  };

  pause = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  };
  handleClickOne() {
    this.setState((state) => ({
      isToggleOne: !state.isToggleOne,
      flag: !state.flag,
      isOne: !state.isOne,
      isToggleOne: this.state.flag ? "X" : "O",
    }));
  }
  handleClickTwo() {
    this.setState((state) => ({
      isToggleTwo: !state.isToggleTwo,
      flag: !state.flag,
      isTwo: !state.isTwo,
      isToggleTwo: this.state.flag ? "X" : "O",
    }));
  }
  handleClickThree() {
    this.setState((state) => ({
      isToggleThree: !state.isToggleThree,
      flag: !state.flag,
      isThree: !state.isThree,
      isToggleThree: this.state.flag ? "X" : "O",
    }));
  }
  handleClickFour() {
    this.setState((state) => ({
      isToggleFour: !state.isToggleFour,
      flag: !state.flag,
      isFour: !state.isFour,
      isToggleFour: this.state.flag ? "X" : "O",
    }));
  }
  handleClickFive() {
    this.setState((state) => ({
      isToggleFive: !state.isToggleFive,
      flag: !state.flag,
      isFive: !state.isFive,
      isToggleFive: this.state.flag ? "X" : "O",
    }));
  }
  handleClickSix() {
    this.setState((state) => ({
      isToggleSix: !state.isToggleSix,
      flag: !state.flag,
      isSix: !state.isSix,
      isToggleSix: this.state.flag ? "X" : "O",
    }));
  }
  handleClickSeven() {
    this.setState((state) => ({
      isToggleSeven: !state.isToggleSeven,
      flag: !state.flag,
      isSeven: !state.isSeven,
      isToggleSeven: this.state.flag ? "X" : "O",
    }));
  }
  handleClickEight() {
    this.setState((state) => ({
      isToggleEight: !state.isToggleEight,
      flag: !state.flag,
      isEight: !state.isEight,
      isToggleEight: this.state.flag ? "X" : "O",
    }));
  }
  handleClickNine() {
    this.setState((state) => ({
      isToggleNine: !state.isToggleNine,
      flag: !state.flag,
      isNine: !state.isNine,
      isToggleNine: this.state.flag ? "X" : "O",
    }));
  }

  render() {
    return (
      <div className="container">
        <button className="musicBtn" onClick={this.play}>
          Play
        </button>
        <button className="musicBtn" onClick={this.pause}>
          Pause
        </button>
        <div>
          <button className="btn" onClick={this.handleClickOne}>
            {this.state.isToggleOne}
          </button>
          <button className="btn" onClick={this.handleClickTwo}>
            {this.state.isToggleTwo}
          </button>
          <button className="btn" onClick={this.handleClickThree}>
            {this.state.isToggleThree}
          </button>
          <button className="btn" onClick={this.handleClickFour}>
            {this.state.isToggleFour}
          </button>
          <button className="btn" onClick={this.handleClickFive}>
            {this.state.isToggleFive}
          </button>
          <button className="btn" onClick={this.handleClickSix}>
            {this.state.isToggleSix}
          </button>
          <button className="btn" onClick={this.handleClickSeven}>
            {this.state.isToggleSeven}
          </button>
          <button className="btn" onClick={this.handleClickEight}>
            {this.state.isToggleEight}
          </button>
          <button className="btn" onClick={this.handleClickNine}>
            {this.state.isToggleNine}
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<OxGame />, document.getElementById("root"));
