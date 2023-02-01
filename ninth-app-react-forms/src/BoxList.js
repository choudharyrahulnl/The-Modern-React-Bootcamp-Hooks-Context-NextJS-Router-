import {Component} from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";
import {v4 as uuidv4} from 'uuid';

class BoxList extends Component {

    state = {
        boxes: []
    }

    createBox = (newBox) => {
        const box = {...newBox, id: uuidv4()};
        this.setState({boxes: [...this.state.boxes, box]});
    }

    remove = (id) => {
        this.setState({boxes: this.state.boxes.filter(box => box.id !== id)});
    }

    render() {
        const boxes = this.state.boxes.map(box =>
            <Box key={box.id} id={box.id} height={box.height} width={box.width} color={box.color} remove={this.remove}/>);
        return (
            <div>
                <h1>Box Maker</h1>
                <BoxForm createBox={this.createBox}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList;