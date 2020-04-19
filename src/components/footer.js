import React from 'react';
import './footer.css';

export class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return <div>
            <footer>
            <div className="foot">    
            <h3>Posted by: Cody Hill</h3>
  <p>Contact information: <a href="mailto:william.cody.hill@gmail.com">
  william.cody.hill@gmail.com</a>.</p>
            <h3>GitHub</h3>
            <p><a href="https://github.com/Diskographi" target="_blank">Diskographi</a></p>
            </div>
            <div className="foot">
            <p>Your browser: {navigator.appCodeName}</p>
            </div>
            <div className="foot">
              <h3>Site Map</h3>
              <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="Bio">Bio</a></li>
                <li><a href="Gallery">Gallery</a></li>  
              </ul>
            </div>
            </footer>
        </div>
    }
}