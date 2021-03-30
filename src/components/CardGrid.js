import React, {Component} from 'react';
import Card from './Card';

export default class CardGrid extends Component {
    render(){

        return(
            <div className="cardGrid">
                {
                    this.props.deck
                        .map((card, index)=>{
                            const isBeingCompared = this.props.selected.indexOf(card) > -1;
                            return <Card
                                key={index} 
                                img={card.img}
                                isBeingCompared={isBeingCompared}
                                selectCard = {() => this.props.selectCard(card)}
                                guess = {card.guess}
                            />
                        })
                }
            </div>
        );
    }
}
