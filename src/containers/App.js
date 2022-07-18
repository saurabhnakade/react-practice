import React, { Component } from "react";
import classes from "../containers/App.css";
import Persons from "../components/Persons/Persons.js";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props){
    super(props) // Basically execute constructor of the component you are extending
    console.log('App.js constructor')
  }

  state = {
    persons: [
      { id:'hbrd',name: "Max", age: '28' },
      { id:'urcn',name: "Manu", age: 25 },
      { id:'osld',name: "Maithili", age: 20 },
    ],
    otherState: "otherValue",
    showPersons: false,
    changeCounter:0,
    authenticated:false,
  };

  static getDerivedStateFromProps(props,state){
    console.log('App.js get derived state from props', props)
    return state 
  }

  componentDidMount(){
    console.log('App.js component did mount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("App.js should component update");
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log("App.js get snapshot before update")
    return null
  }
  
  componentDidUpdate(){
    console.log("App.js component did update");
  }

  buttonHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Riddhi", age: 19 },
        { name: "Maithili", age: 20 },
      ],
    });
  };

  nameChangeHandler = (id,event) => {
    const personIdx=this.state.persons.findIndex(p=>{
      return p.id===id
    })

    const person={
      ...this.state.persons[personIdx]
    }
    person.name=event.target.value;

    const personsArray=[...this.state.persons];
    personsArray[personIdx]=person;

    this.setState((prevState,props)=>{
      return {
        persons: personsArray,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonsHandler= (index)=>{
    const personsArray=[...this.state.persons];
    personsArray.splice(index,1)
    this.setState({
      persons:personsArray
    })
  }

  loginHandler=()=>{
    this.setState({
      authenticated:true
    })
  }

  render() {
    console.log('App.js render')

    let persons=null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonsHandler}
           changed={this.nameChangeHandler}
           isAuthenticated={this.state.authenticated}
           />
        </div>
      );
    }

    return (
      <div className={classes.App}>
          <AuthContext.Provider value={{
            authenticated:this.state.authenticated,
            login:this.loginHandler,
          }}>
          <Cockpit clicked={this.togglePersonsHandler} 
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          />
          {persons}
        </AuthContext.Provider>
        <p></p>
      </div>
    );
  }
}

export default App;
