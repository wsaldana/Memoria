import React, {Component} from 'react';
import Header from './Header'
import CardGrid from './CardGrid'
import './styles.scss'
import deckBuilder from '../utils/buildDeck'

const getInitState = () => {
    const deck = deckBuilder();
    return {deck, selected:[], compared:false}
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = getInitState();
    }

    render(){
        return(
            <div>
                <Header />
                <CardGrid 
                    deck = {this.state.deck}
                    selected = {this.state.selected}
                    selectCard = {(card) => this.selectCard(card)}
                />
            </div>
        );
    }

    selectCard(card){
        console.log("yeeeeeees")
        if(this.state.compared || this.state.selected.indexOf(card) > -1 || card.guess){
            return;
        }
        const selected = [...this.state.selected, card];
        this.setState({
            selected
        })

        if(selected.length === 2){
            this.compareCards(selected);
        }
    }

    compareCards(selected){
        this.setState({compared: true});
        setTimeout(() => {
            const [first, second] = selected;
            let deck = this.state.deck;

            if(first.img === second.img){
                deck = deck.map((card) => {
                    if(card.img != first.img){
                        return card;
                    }
                    return {...card, guess: true};
                })
            }

            this.setState({
                selected: [],
                deck,
                compared: false
            })
        }, 1000)
    }
} 

export default App;