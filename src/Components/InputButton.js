import React, { Component } from 'react';

class InputButton extends Component {
    constructor() {
        super()
        this.state = {
            totalWater: 0
        }
    }


    onChange = e => {
        const tW = e.target.value * 0.67
    }

    handleClick = () => {
        this.setState({
            totalWater: this.tW
        })
        console.log(this.tW)
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange} className="main-input" type="text" placeholder="100lbs" /> <br />
                <button onClick={this.handleClick} className="main-button">Drink Water</button>
                <p className="water-total">{this.state.totalWater} fl. oz</p>
            </div>
        )
    }
}

export default InputButton