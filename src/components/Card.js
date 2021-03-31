/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import imgBack from '../public/img/back.png';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  /* eslint-disable jsx-a11y/no-static-element-interactions */

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      /* eslint-disable jsx-a11y/alt-text */
      <div className="card" onClick={this.props.selectCard}>
        <ReactCardFlip isFlipped={this.props.guess || this.props.isBeingCompared} flipDirection="vertical">
          <img
            src={imgBack}
            onClick={this.handleClick}
          />

          <img
            src={this.props.img}
            onClick={this.handleClick}
          />
        </ReactCardFlip>
      </div>
    );
  }
}
