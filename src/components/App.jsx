import React, { Component } from 'react'
import './App.css'
import Profile from './profile/Profile'
import MyProps from './Props/MyProps'

class App extends Component {
    render() {
        return <>
            <div className="App-Container">
                <h1>My First React Application</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex temporibus totam quod cupiditate voluptatem laborum blanditiis, quia ducimus quae odit provident enim eligendi soluta labore eum adipisci earum odio.
                </p>
                    
                <Profile />
            </div>
        </>
    }
}

export default App 