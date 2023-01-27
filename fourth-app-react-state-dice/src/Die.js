import {Component} from "react";
import './Die.css';

class Die extends Component {

    render() {
        let face = this.props.face;
        return (
            <i className={`Die fas fa-dice-${face} ${this.props.isRolling && 'shaking'}`}></i>
        )
    }
}

export default Die;