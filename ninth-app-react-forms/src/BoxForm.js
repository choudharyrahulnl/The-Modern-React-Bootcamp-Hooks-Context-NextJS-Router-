import {Component} from "react";

//import uuid from "uuid/v4";

class BoxForm extends Component {

    state = {
        height: 0,
        width: 0,
        color: ""
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createBox(this.state);
        this.setState({height: 0, width: 0, color: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="text" name="height" id="height" value={this.state.height}
                           onChange={this.handleOnChange}/>
                </div>

                <div>
                    <label htmlFor="width">Width</label>
                    <input type="text" name="width" id="width" value={this.state.width}
                           onChange={this.handleOnChange}/>
                </div>

                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" id="color" value={this.state.color}
                           onChange={this.handleOnChange}/>
                </div>

                <button>Add Box</button>
            </form>
        )
    }
}

export default BoxForm;