import React from "react";

// Create Hello Class Component with no props
export default class Hello extends React.Component {
    render() {
        console.log(this.props);
        const {name,bangs} = this.props;
        let bangsText = "!".repeat(bangs);
        const img = {width: '200px'};
        return (
            <div>
                <p>Hello {name} {bangsText}</p>
                <img src={this.props.img} style={img} alt={''}/>
            </div>
        );
    }
}

// Create Hello Functional Component with no props
//  export default function Hello({name}) {
//     return <h1>Hello {name}!</h1>;
//   }
