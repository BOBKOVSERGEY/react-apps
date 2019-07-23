import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";


export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };
  // этот компонет становится error баундри
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    return this.props.children;
  }
}