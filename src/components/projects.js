import React from 'react';
import './projects.css';
import Iframe from 'react-iframe';
import { TwitterTimelineEmbed, 
         TwitterShareButton, 
         TwitterFollowButton, 
         TwitterHashtagButton, 
         TwitterMentionButton, 
         TwitterTweetEmbed, 
         TwitterMomentShare, 
         TwitterDMButton, 
         TwitterVideoEmbed, 
         TwitterOnAirButton } from 'react-twitter-embed';
import codeqr from '../codeqr.png'; 

export class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="project">
        <h2>JavaScript Bookstore Website</h2>    
        <Iframe url="https://diskographi.github.io/Diskographi-github.io/"
        width="90%"
        height="600px"
        id="jsClass"
        className="mangaShop"
        display="initial"
        position="relative"/>
        <p>This site was created in 2019 during a JavaScript class for the final project.</p>
        <h2>Python Twitter Bot</h2>
        <div style={{contentAlign: "center", width: "50%", margin: "auto"}}>    
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="diskographi1"
          options={{height: 400}}/>
        <p>This twitter account will automatically search for and retweet
            tweets from a certain search topic using the Twitter API.
        </p>
        </div>
        <div>
            <h2>Education on Codecademy</h2>
            <img src={codeqr} />
        <p>Actively self-teaching coding since crica March 2018.</p>
        </div>
        </div>)
    }
}