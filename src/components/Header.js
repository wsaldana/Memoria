import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">Memoria WS</div>
                <div>
                    <button className="btn btn-light" onClick={this.props.reset}>Restart</button>
                </div>
                <div className="titulo">Intentos: {this.props.count}</div>
            </header>
        )
    }
}
