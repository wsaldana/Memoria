import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import imgBack from '../public/img/back.png';


export default class Card extends Component {

    constructor() {
        super();
            this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        
    }

    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <img
                        src={imgBack}
                        onClick={this.handleClick}
                    ></img>

                    <img
                        src={this.props.img}
                        onClick={this.handleClick}
                    ></img>
                </ReactCardFlip>
            </div>
        )
    }
}
