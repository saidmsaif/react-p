import React, { Component } from 'react'

const Name = () => (
    <div className="Bio">
        <h1>Saifullah Saif</h1>
    </div>
)

const Skills = () => (
    <div className="Skills">
        <h3>Skills :</h3>
        <ol>
            <li>WordPress Development</li>
            <li>MERN Stack Development</li>
            <li>E-Commerce Expert</li>
        </ol>
    </div>
)

const SocialProfile = () => (
    <div className="Social-Links">
        <h3>Social Links :</h3>
        <ol>
            <li><a href="https://www.facebook.com/saidmsaiff">Facebook</a></li>
            <li><a href="https://www.twitter.com/saidmsaif">Twitter</a></li>
            <li><a href="https://www.linkedin.com/saidmsaif">Facebook</a></li>
        </ol>
    </div>
)

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