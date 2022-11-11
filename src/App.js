import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counter.js";


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className='counter-wrapper'>
        <div className='counter-display'>{this.props.count}</div>
        <div className="controls-wrapper">
          {console.log(this.props)}
          <button onClick={()=>{this.props.increment()}}>Increment</button>
          <button onClick={()=>{this.props.decrement()}}>decrement</button>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
