import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '././../hoc/WithClass';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props){
    console.log('[App.js]inside constructor',props);
    super(props);
    this.state = {
      persons : [
        { id: '1234', name: 'Max', age: 23 },
        { id: '12345', name: 'Manu', age: 25 },
        { id: '123456', name: 'Max', age: 27 }
      ],
      showPersons : false,
      toggleClicked: 0,
      authenticated: false,
    }
  }
  componentWillMount(){
    console.log('[App.js]inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js]inside componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState ){
    console.log('[UPDATE App.js]inside shouldComponnetUpdate','nextProps :: ', nextProps, 'nextState ::', nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js]inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js]inside componentDidUpdate');
  }
 
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( { persons : persons });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState({ persons : persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
          return {
              showPersons: !doesShow,
              toggleClicked: prevState.toggleClicked + 1
            }
    });  
  }
  loginHandler = () => {
    this.setState({authenticated: true})
  }
  render(){
    console.log('[App.js]inside render');
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} 
                    isAuthenticated={this.state.authenticated}/>;
    }
    
  return(
      <WithClass className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.togglePersonHandler}
            login={this.loginHandler}    />
          {persons}
      </WithClass> 
    )
  }
}


export default App;
