import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

import {fetchSmurfs, addSmurf} from "../actions"


import AddSmurf from "./AddSmurf"
import SmurfList from "./SmurfList"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  
  render() {
    if(this.props.fetching) {
      return(
        <div>LOADING</div>
      )
    }
    // console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList smurfs = {this.props.smurfs}/>
        <AddSmurf addSmurf = {this.props.addSmurf} />

      </div>
    );
  }
}

const mstp = state =>{
  return {
    smurfs: state.smurfs,
    fetching: state.fetchSmurfs
  }
}

export default connect(mstp, {fetchSmurfs, addSmurf})(App);
