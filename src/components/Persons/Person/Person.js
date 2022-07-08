import React, { Component } from "react";
import classes from './Person.css'  // role of webpack to manage
import Aux from "../../../hoc/Aux";

class Person extends Component{
  render(){
    console.log("Person.js rendering...");
    return (
      // <div className={classes.Person}>
      <Aux>
        <p key="i1" onClick={this.props.click}>
          This is {this.props.name} {this.props.age} years old
        </p>
        <input key="i2" type="text" onChange={this.props.change} value={this.props.name} />
        <p key="i3">{this.props.children}</p>
      </Aux>
      // </div>
    );
  }
};


export default Person;
