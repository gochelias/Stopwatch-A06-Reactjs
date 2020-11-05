import React, { Component } from 'react';
import './App.css';

export default class StopWatch extends Component {
  constructor() {
    super();
    this.state = this.initialState = {
      timerON: false,
      timeStart: 0,
      totalTime: 0,
    };
  };

  start = () => {
    this.setState({
      timerON: true,
      totalTime: this.state.totalTime,
      timeStart: Date.now() - this.state.totalTime
    });
    this.timer = setInterval(() => {
      this.setState({
        totalTime: Date.now() - this.state.timeStart
      });
    }, 10);
  };

  stop = () => {
    this.setState({timerON: false});
    clearInterval(this.timer);
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState(this.initialState);
  };

  render() {
    const seconds = this.state.totalTime / 1000;

      let days = Math.floor(seconds / 86400).toString();
      let hrs = Math.floor((seconds / 3600) % 24).toString();
      let min = Math.floor((seconds / 60) % 60).toString();
      let sec = Math.floor(seconds % 60).toString();

    let { timerON, totalTime } = this.state;
    let { start, stop, reset } = this;

    return (
      <div className="App-header">
        <div className="stopwatch">
          {days}d : {hrs}h : {min}m : {sec}s
        </div>
        <div>

          {timerON === false && totalTime === 0 && (
            <button onClick={start}>START</button>)}

          {timerON === true && (
            <button onClick={stop}>Stop</button>)}

          {timerON === false && totalTime > 0 && (
            <button onClick={start}>Resume</button>)}
          
          {timerON === false && totalTime > 0 && (
            <button onClick={reset}>Reset</button>)}

        </div>
      </div>
    );
  };
};
