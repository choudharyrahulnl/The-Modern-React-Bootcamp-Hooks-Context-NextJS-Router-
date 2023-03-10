 import React from "react";

// Create Machine Class Component with no props
export default class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const colors = {fontSize: '50px'};
        return (
            <div className={'Machine'}>
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? 'Winner' : 'Loser'}
                </p>
            </div>
        );
    }
}