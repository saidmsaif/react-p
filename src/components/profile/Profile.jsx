import React, { Component } from 'react'
import Bio from './Bio'
import Skills from './Skills'
import SocialProfile from './SocialProfile'

const Child = props => (
    <div>
        <h1>This is Parent component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum.</p>
        {props.children}
    </div>
)

class Profile extends Component {
    render() {
        return <>
            <div className="Profile">
                <Bio name='Saifullah' />
                <Skills skillA='React' skillB='Express' skillC='MongoDB'/>
                <SocialProfile linkA='Facebook' linkB='Twitter' />
            </div>

            <Child>
                <h2>I'm Children of the parent component</h2>
            </Child>
        </>
    }
}

export default Profile