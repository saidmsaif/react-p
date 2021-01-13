import React, { Component } from 'react'
import Bio from './Bio'
import Skills from './Skills'
import SocialProfile from './SocialProfile'


class Profile extends Component {
    render() {
        return <>
            <div className="Profile">
                <Bio name='Saifullah' />
                <Skills skillA='React' skillB='Express' skillC='MongoDB'/>
                <SocialProfile linkA='Facebook' linkB='Twitter'/>
            </div>
        </>
    }
}

export default Profile