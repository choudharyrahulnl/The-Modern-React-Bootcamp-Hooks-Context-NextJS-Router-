import {Component} from "react";

class RandomNumber extends Component {

    state = {
        num: 0
    }

    handleClick = () => {
        let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
        this.setState({num: rand})
    }

    render() {
        let display;
        if(this.state.num === 7) {
            display = <h2>You win!</h2>
        } else {
            display = <button onClick={this.handleClick}>Random number</button>
        }
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {display}
            </div>
        )

    }
}

export default RandomNumber;