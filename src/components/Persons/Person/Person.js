import React, { Component } from "react";
import classes from './Person.css'  // role of webpack to manage

class Person extends Component{
  render(){
    console.log("Person.js rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          This is {this.props.name} {this.props.age} years old
        </p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
        <p>{this.props.children}</p>
      </div>
    );
  }
};

export default Person;
