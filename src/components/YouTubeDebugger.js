import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
            
        
    }

    handleBit = event => {
        // this.setState({settings: {bitrate: 12}})
        this.state.settings.bitrate = 12
    }

    handleRes = event => {
        this.state.settings.video.resolution = "720p"
    }

    render() {
        return (
           <div>
                <button className="bitrate" onClick={this.handleBit} >bitrate</button>
                <button className="resolution" onClick={this.handleRes}>resolution</button>
         </div>
        );
    }
}

export default YouTubeDebugger;