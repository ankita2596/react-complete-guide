import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props){
        console.log('[Persons.js]inside constructor',props);
        super(props);
    }
      componentWillMount(){
        console.log('[Persons.js]inside componentWillMount');
      }
      componentDidMount(){
        console.log('[Persons.js]inside componentDidMount');
      }
      componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js]inside componenWillReceiveProps', nextProps);
      }
      shouldComponentUpdate(nextProps, nextState ){
        console.log('[UPDATE Persons.js]inside shouldComponnetUpdate','nextProps :: ', nextProps, 'nextState ::', nextState);
        return nextProps.persons !== this.props.persons;
      }
      componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js]inside componentWillUpdate', nextProps, nextState);
      }
      componentDidUpdate(){
        console.log('[UPDATE Persons.js]inside componentDidUpdate');
      }
    render(){
        console.log('[Persons.js]inside render');
        return  this.props.persons.map(( person, index ) => {
            return  <Person 
                      click = {() => this.props.clicked( index )}
                      name = {person.name}
                      age = {person.age}  
                      key = {person.id}
                      authenticated = {this.props.isAuthenticated}
                      changed = {(event) =>  this.props.changed( event, person.id ) }
                      position = {index}  />
                    });
           }
        }

export default Persons;