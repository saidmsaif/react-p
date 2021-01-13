import React from 'react'

const SocialProfile = (props) => (
    <div className="Social-Links">
        <h3>Social Links :</h3>
        <ol>
            <li>
                <a href="https://www.facebook.com/saidmsaiff">{props.linkA}</a>
            </li>
            <li>
                <a href="https://www.twitter.com/saidmsaif">{props.linkB}</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/saidmsaif">{props.linkC}</a>
            </li>
        </ol>
    </div>
)

export default SocialProfile