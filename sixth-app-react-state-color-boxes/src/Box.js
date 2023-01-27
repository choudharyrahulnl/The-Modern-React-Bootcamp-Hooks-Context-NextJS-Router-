import {Component} from "react";
import {choice} from "./Helper";
import './Box.css';

class Box extends Component {

    state = {
        color: choice(this.props.allColors)
    }

    clickHandler = () => {
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color);
        this.setState({color: newColor});
    }

    render() {
        return (
            <div className={'Box'}
                 style={{backgroundColor: this.state.color}}
                 onClick={this.clickHandler}>H</div>
        )
    }
}

export default Box;