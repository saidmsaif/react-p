import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return <>
            <div className="Profile">
                <Name />
                <Skills />
                <SocialProfile />
            </div>
        </>
    }
}

export default Profile