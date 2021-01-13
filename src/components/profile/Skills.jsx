import React from 'react'

const Skills = (props) => (
    <div className="Skills">
        <h3>Skills :</h3>
        <ol>
            <li>{props.skillA}</li>
            <li>{props.skillB}</li>
            <li>{props.skillC}</li>
        </ol>
    </div>
)

export default Skills