import React, { Component } from 'react'
import './Timer.css'
// import Profile from './profile/Profile'
// import MyProps from './Props/MyProps'
const Btn = {
    background: 'red',
    padding: '5px 10px',
    color: 'white',
    cursor: 'pointer'
}

class Timer extends Component {
    state = {
        count: 0,
    }

    intervalId = null

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    decrementCount = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            })
        }
    }

    startTimer = () => {
        if (this.state.count > 0) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count + 1 }, () => {
                        if (this.state.count === 10) {
                            alert('Timer Finished')
                            clearInterval(this.intervalId)
                            this.intervalId = null
                        }
                })
            }, 1000)
        }
    }

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState({ count: 0 })
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render() {
        return <>
            <div className="App-Container">
                <h1>React Timer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex temporibus totam quod cupiditate voluptatem laborum blanditiis, quia ducimus quae odit provident enim eligendi soluta labore eum adipisci earum odio.
                </p>
                    
                {/* <Profile /> */}

                <button onClick={this.decrementCount}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrementCount}>+</button>
                <br />
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button style={Btn} onClick={this.resetTimer}>Reset</button>
            </div>
        </>
    }
}

export default Timer 