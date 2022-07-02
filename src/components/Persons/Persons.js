import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  state = {
    someValue: "someValue",
  };
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js get derived state from props", props);
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js should component update");
  //   if(nextProps.persons!==this.props.persons){
  //     return true
  //   }else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js get snapshot before update");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js component did update");
    console.log(snapshot);
  }
  
  componentWillUnmount() {
    console.log("Persons.js component will unmount");
  }

  render() {
    console.log("Persons.js rendering...");

    return this.props.persons.map((person, index) => {
      return <Person key={person.id} name={person.name} age={person.age} click={() => this.props.clicked(index)} change={(event) => this.props.changed(person.id, event)} />;
    });
  }
}

export default Persons;
