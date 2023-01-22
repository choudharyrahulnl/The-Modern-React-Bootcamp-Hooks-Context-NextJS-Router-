import {Component} from "react";

export default class Messages extends Component {
    render() {
        const {messages} = this.props;
        return (
            <div>
                <h3>Messages</h3>
                <ul>
                    {messages.map(m => <li key={m.id}>Day {m.id}, {m.message}</li>)}
                </ul>
            </div>
        )
    }
}