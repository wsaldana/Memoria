/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Card from './Card';

export default class CardGrid extends Component {
  render() {
    return (
    /* eslint-disable react/destructuring-assignment */
    /* eslint-disable react/prop-types */
      <div className="cardGrid">
        {
                    this.props.deck
                      .map((card) => {
                        const isBeingCompared = this.props.selected.indexOf(card) > -1;
                        return (
                          <Card
                            img={card.img}
                            isBeingCompared={isBeingCompared}
                            selectCard={() => this.props.selectCard(card)}
                            guess={card.guess}
                          />
                        );
                      })
                }
      </div>
    );
  }
}
