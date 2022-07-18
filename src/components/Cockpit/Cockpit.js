import React, { useEffect } from "react";
import classes from './Cockpit.css'
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {
  useEffect(()=>{
    console.log('Cockpit.js useEffect')
    // HTTP request .....
  },[props.persons])

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

      <AuthContext.Consumer>
        {(context)=>
          <button onClick={context.login}>Login</button>
        }
      </AuthContext.Consumer>

      <h1>Hi, I'm a React app</h1>
      <p className={assignedClasses.join(" ")}>This is working great !</p>
    </div>
  );
};

export default React.memo(Cockpit);
