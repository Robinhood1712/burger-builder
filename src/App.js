import React, { Component } from 'react';

import Person from './Persons/Persons';
import styles from './App.css'

import ErrorBoundary from './ErrorBoundary';


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



  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons ];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

    }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }



  render () {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;
    let btnClasses = styles.button;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
             <Person 
              name={person.name}  
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );

      btnClasses = [styles.red, styles.button].join(' ')
    }


    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (this.state.persons.length <= 1){
      classes.push(styles.bold);
    }


    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClasses}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
