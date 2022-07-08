import React, { Component, Fragment } from "react";
import classes from "./Person.css"; // role of webpack to manage
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass.js";
import PropTypes from "prop-types";

class Person extends Component {
  render() {
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
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};

export default Person;
