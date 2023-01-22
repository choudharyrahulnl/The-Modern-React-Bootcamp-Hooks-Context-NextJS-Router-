import React from "react";

export default class HelloFrom extends React.Component {

    static defaultProps = {
        from: 'Rahul',
        bangs: 2
    }
    render() {
        console.log(this.props);
        const {to,from,bangs} = this.props;
        let bangsText = "!".repeat(bangs);
        return (
            <div>
                <p>Hello {to} from {from} {bangsText}</p>
            </div>
        );
    }
}