import React from "react";
import classes from './Person.css'  // role of webpack to manage
// import Radium from "radium";


const person = (props) => {

  return (
    <div className={classes.Person} >
      <p onClick={props.click}>
        This is {props.name} {props.age} years old
      </p>
      <input type="text" onChange={props.change} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

export default person;
