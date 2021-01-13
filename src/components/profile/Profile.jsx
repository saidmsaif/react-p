import React, { Component } from 'react'
import Bio from './Bio'
import Skills from './Skills'
import SocialProfile from './SocialProfile'


class Profile extends Component {
    render() {
        return <>
            <div className="Profile">
                <Bio />
                <Skills />
                <SocialProfile />
            </div>
        </>
    }
}

export default Profile