import React, { Component } from "react";
import classes from "../containers/App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:'hbrd',name: "Max", age: 28 },
      { id:'urcn',name: "Manu", age: 25 },
      { id:'osld',name: "Maithili", age: 20 },
    ],
    otherState: "otherValue",
    showPersons: false,
  };

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

    this.setState({
      persons: personsArray,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonsHandler= (index)=>{
    // const personsArray=this.state.persons.slice();
    const personsArray=[...this.state.persons];
    personsArray.splice(index,1)
    this.setState({
      persons:personsArray
    })
  }

  render() {
    let btnClass=[classes.Button]

    let persons=null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
              return (
                <Person 
                key={person.id}
                name={person.name} age={person.age} 
                click={this.deletePersonsHandler.bind(this,index)}
                change={this.nameChangeHandler.bind(this,person.id)}
                />
              )
            })
          }
        </div>
      );
      
      btnClass.push(classes.Red)
    }

    const assignedClasses=[];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold );
    }

    return (
      <div className={classes.App}>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Click Me
        </button>

        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(" ")}>This is working great !</p>

        {persons}
      </div>
    );
  }
}

export default App;
