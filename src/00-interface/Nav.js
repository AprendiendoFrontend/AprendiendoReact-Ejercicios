import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";

class Nav extends Component {
  state = {
    project: "",
    type: ""
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      path: PropTypes.string
    })
  };

  ComponentDidMount() {
    const { type } = this.props.match.params;
    this.setState({ project: type });
  }

  render() {
    const { params } = this.props.match;
    const { project } = this.state;
    return (
      <nav className="app-nav">
        <Link to="/">
          <button onClick={() => this.setState({ type: "/" })}>Inicio</button>
        </Link>
        <Link to={`/${params.type}/${project}`}>
          <button onClick={() => this.setState({ type: "/documents" })}>
            Documentación
          </button>
        </Link>
        <Link to={`/${params.type}/${project}`}>
          <button onClick={() => this.setState({ type: "/demo" })}>Demo</button>
        </Link>
      </nav>
    );
  }
}

export default Nav;
