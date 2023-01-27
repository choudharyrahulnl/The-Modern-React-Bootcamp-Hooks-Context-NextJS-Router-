import Box from "./Box";
import {Component} from "react";
import './Boxes.css';

class Boxes extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: ['red', 'green', 'blue', 'yellow']
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (<Box allColors={this.props.allColors} />));
        return <div className={'Boxes'}>{boxes}</div>
    }
}

export default Boxes;