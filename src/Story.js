import { Avatar } from '@material-ui/core'
import React from 'react'

function Story({image, profileSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}}
        className="Story"> 
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
