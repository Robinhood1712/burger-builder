import React, { Component } from 'react';

// import Person from './Components/persons/person/person';
import styles from './App.css';
import Persons from '../comps/Persons/Persons';
import Cockpit from '../comps/Cockpit.js/Cockpit'
import Auxi from '../hoc/auxi';
// import ErrorBoundary from '../ErrorBoundary';


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

    if ( this.state.showPersons ) {
      persons = (
        <div>
           <Persons
                  persons = {this.state.persons}
                  changed = {this.nameChangedHandler}
                  clicked = {this.deletePersonHandler}
              /> 
        </div>
               
      )
    }



    return (
      <Auxi>
      <div className={styles.App}>
        <Cockpit 
          title = {this.props.appTitle}
          persons={this.state.persons}
          showPersons= {this.state.showPersons} 
          clicked= {this.togglePersonsHandler}/>
        {persons}
      </div>
      </Auxi>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
