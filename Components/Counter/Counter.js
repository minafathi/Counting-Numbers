import React, { Component } from 'react';
import './Counter.css';
// import "regenerator-runtime/runtime.js";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            second: 0,
            count: true,
            continue: true,
        }
    }
    

    stopCounterHandler = () => {
        this.setState({count : !this.state.count});
        if(this.state.second+this.props.second === 0){
            this.state.second = this.state.second-1
          }

    }


    tick = () => {
        if(this.state.second+this.props.second === 0) {
            this.setState({count : false});
          }
        if(this.state.count){
            this.setState({second: this.state.second-1});   
        }
    }

    componentDidMount() {
        console.log(this.state.second)
        this.interval = setInterval(() => this.tick(), 100);
        this.setState({second: this.interval});
    }
    
    shouldComponentUpdate() {
        if(this.state.continue){
            return true;
        } 
    }

    

    render() {
        return (
            <div className="rows">
                <p>{this.state.second+this.props.second}</p>
                <button
                    onClick={this.stopCounterHandler} 
                    className="btn">Stop/Start</button>
            </div>
        );   
    }
     
}

export default Counter;