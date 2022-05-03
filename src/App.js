import React, { Component } from 'react';
import './App.css';

import UserOutput from './userOutput';
import UserInput from './userInput';

class App extends Component {
  state = {
    username : 'adewole'
  }

  nameChangedHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  }



  render() {
    return (
      <div className="App">


        <UserOutput username = {this.state.username} />
        <UserOutput username = ' yusuf'/>
        <UserInput
           changed = {this.nameChangedHandler}
           name= {this.state.username}/>

      </div>
    );
  }
}

export default App;
