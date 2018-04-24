import React, { Component } from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            increment: 1,
        };
        this.counting = this.counting.bind(this);
        this.reset = this.reset.bind(this);
    }

    counting() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }));
    }

    reset() {
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <div className="hello-container">
                <div className="click-text">
                    <h1 onClick= {this.counting}>Click me !</h1>
                    <h1 onClick= {this.reset}>Reset</h1>
                </div>
                <div>
                    <h2>You hit me : {this.state.counter} times</h2>
                </div>
            </div>
        );
    }
}

export default Home;