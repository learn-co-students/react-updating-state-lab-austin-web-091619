import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
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
    bitrateChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    resolutionChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    
                    resolution: '720p'
                }
            }
        })
    }
render() {
    return (
        <div>
        <button className='bitrate' onClick={this.bitrateChange}>{this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.resolutionChange}>{this.state.settings.video.resolution}</button>
        </div>
    )
    }
}
