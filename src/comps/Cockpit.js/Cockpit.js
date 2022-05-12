import React from 'react';
import styles from './Cockpit.css'


const cockpit = ( props ) => {

    let classes = [];
    let btnClasses = styles.button;

    if (props.showPersons){
        btnClasses = [styles.button, styles.red].join
    }


    if (props.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (props.persons.length <= 1){
      classes.push(styles.bold);
    }
    
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
          className={btnClasses}
          onClick={props.clicked}>Toggle Persons</button>

        </div>

    )
};

export default cockpit;