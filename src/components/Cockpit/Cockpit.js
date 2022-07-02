import React from "react";
import classes from './Cockpit.css'

const Cockpit = (props) => {
  console.log("Cockpit.js rendering...");

  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Click Me
      </button>

      <h1>Hi, I'm a React app</h1>
      <p className={assignedClasses.join(" ")}>This is working great !</p>
    </div>
  );
};

export default Cockpit;
