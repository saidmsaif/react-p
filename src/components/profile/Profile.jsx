import React, { Component } from 'react'
import Bio from './Bio'
import Skills from './Skills'
import SocialProfile from './SocialProfile'

const Child = props => (
    <div>
        <h1>This is Parent component</h1>
        {props.children}
    </div>
)

class Profile extends Component {
    state = {
        count: 0,
    }

    render() {
        return <>
            <div className="Users">
                <div className="Profile">
                    <Bio name='Saifullah' />
                    <Skills skillA='React' skillB='Express' skillC='MongoDB'/>
                    <SocialProfile linkA='Facebook' linkB='Twitter' />
                </div>
            </div>

            <Child>
                <h2>I'm counting - {this.state.count}</h2>
                <button
                    onClick={() => {
                        this.setState(() => {
                            return { count: this.state.count + 1 }
                        }, () => {
                            console.log(this.state.count);
                        })
                    }}
                >Add ++</button>
            </Child>
        </>
    }
}

export default Profile