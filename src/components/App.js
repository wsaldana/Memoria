import React, { Component } from 'react';
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

  selectCard(card) {
    if (this.state.compared || this.state.selected.indexOf(card) > -1 || card.guess) {
      return;
    }
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
          if (card.img != first.img) {
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
        count: this.state.count + 1,
      });
    }, 1000);
  }

  win(deck) {
    if (deck.filter((card) => !card.guess).length === 0) {
      alert(`You Won the DUEL! \nAttempts: ${this.state.count}`);
    }
  }

  reset() {
    this.setState(getInitState());
  }
}

export default App;
