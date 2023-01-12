import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    state = {
        Clicks: 0,
        message: "Hello"
    }

    addOneClick = () => {
        this.setState( {Clicks: this.state.Clicks +1});
    }

    handleNewMessage = (event) => {
        this.setState({message: event.target.value});
    }

    render(props) {
        return (
            <div className='one-box'>
                <h1>{this.props.title}</h1>
                <h2>clicks: {this.state.Clicks}</h2>
                <h3>Message: {this.state.message}</h3>
                <input type="text" value={this.state.message} onChange={this.handleNewMessage}/>
                <button onClick={this.addOneClick}>Click me</button>
            </div>
        )
    }
}

export default Counter;