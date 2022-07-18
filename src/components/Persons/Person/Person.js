import React, { Component } from "react";
import classes from "./Person.css"; // role of webpack to manage
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    this.inputElementRef.current.focus()
  }
  
  render() {
    console.log("Person.js rendering...");
    return (
      <div className={classes.Person}>
        <AuthContext.Consumer>
          {(context)=>
          context.authenticated?<p>Authenticated</p>: <p>Please Log In</p>}
        </AuthContext.Consumer>
        
        <p onClick={this.props.click}>
          This is {this.props.name} {this.props.age} years old !
        </p>
        <input ref={this.inputElementRef} type="text" onChange={this.props.change} value={this.props.name} />
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
