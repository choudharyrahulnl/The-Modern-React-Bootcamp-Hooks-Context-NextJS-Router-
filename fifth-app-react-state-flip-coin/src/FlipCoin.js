import {Component} from "react";
import Coin from "./Coin";
import {choice} from "./Helper";

class FlipCoin extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tail-jpg'}
        ]
    }

    state = {
        currCoin: null,
        nFLips: 0,
        nHeads: 0,
        nTails: 0
    }

    handleFlipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFLips: st.nFLips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        });
    }

    render() {
        return (
            <div className="FlipCoin">
                <h3>Let's Flip a Coin</h3>
                <button onClick={this.handleFlipCoin}>Flip Me</button>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <p>Out of {this.state.nFLips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        );
    }
}

export default FlipCoin;