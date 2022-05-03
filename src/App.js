import React, { Component } from 'react';
import './App.css';

import Person from './Persons/Persons';



class App extends Component {
  state = {
    persons :[
      { name: 'Ade', age: 30, id: 'qwerty'},
      {name: 'korede', age: 35, id: 'lsjsj'},
      {name: 'teni', age: 40, id: 'hssana'}
    ],
    otherState: 'some other value',
    showPersons : false
  }

  switchNameHandler = (name) => {
      this.setState({
        persons: [
          { name: name, age: 30 },
          { name: 'korede', age: 35 },
          { name: 'teni', age: 40 }
        ]
      } )  
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }



  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} key={person.id}  />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
