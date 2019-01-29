import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    console.log("[Person.js]inside constructor", props);
    super(props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js]inside componentWillMount");
  }
  componentDidMount() {
    console.log("[Person.js]inside componentDidMount");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Person.js]inside componenWillReceiveProps", nextProps);
  }
  render() {
    console.log("[Person.js]inside render");
    return (
      <WithClass className={classes.Person}>
        {this.props.authenticated ? <p>I'm authenticated</p> : null}
        <p onClick={this.props.click}>
          I am {this.props.name}! My age is {this.props.age}
        </p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
