/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
    /* eslint-disable react/destructuring-assignment */
    /* eslint-disable react/prop-types */
      <header>
        <div className="titulo">Memoria WS</div>
        <div>
          <button className="btn btn-light" type="button" onClick={this.props.reset}>Restart</button>
        </div>
        <div className="titulo">
          Intentos:
          {this.props.count}
        </div>
      </header>
    );
  }
}
