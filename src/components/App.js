/* eslint-disable linebreak-style */
// Windows no permite solucionar el error linebreak-style directamente
// unicamente se puede solucionar dentro del repo con gitattributes
/* eslint-disable react/no-unused-state */
// Todos los estaddos son enviados a los componentes
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import CardGrid from './CardGrid';
import './styles.scss';
import deckBuilder from '../utils/buildDeck';

const getInitState = () => {
  const deck = deckBuilder();
  return {
    deck, selected: [], compared: false, count: 0,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitState();
  }

  selectCard(card) {
    if (this.state.compared || this.state.selected.indexOf(card) > -1 || card.guess) {
      return;
    }
    // eslint-disable-next-line react/no-access-state-in-setstate
    const selected = [...this.state.selected, card];
    this.setState({
      selected,
    });

    if (selected.length === 2) {
      this.compareCards(selected);
    }
  }

  compareCards(selected) {
    this.setState({ compared: true });
    setTimeout(() => {
      const [first, second] = selected;
      let { deck } = this.state;

      if (first.img === second.img) {
        deck = deck.map((card) => {
          if (card.img !== first.img) {
            return card;
          }
          return { ...card, guess: true };
        });
      }

      this.win(deck);

      this.setState({
        selected: [],
        deck,
        compared: false,
        // eslint-disable-next-line react/no-access-state-in-setstate
        count: this.state.count + 1,
      });
    }, 1000);
  }

  win(deck) {
    if (deck.filter((card) => !card.guess).length === 0) {
      Swal.fire({
        title: 'You Won the DUEL!',
        text: `Attempts: ${this.state.count + 1}`,
        width: 600,
        padding: '3em',
        imageUrl: 'https://wallpapercave.com/wp/wp2580362.jpg',
        backdrop: 'rgba(10,10,10,0.4)',
      });
    }
  }

  reset() {
    this.setState(getInitState());
  }

  render() {
    return (
      <div>
        <Header
          count={this.state.count}
          reset={() => this.reset()}
        />
        <CardGrid
          deck={this.state.deck}
          selected={this.state.selected}
          selectCard={(card) => this.selectCard(card)}
        />
      </div>
    );
  }
}

export default App;
