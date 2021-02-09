import React from 'react';
import "./profile.style.css";
import Bio from "./bio";
import Links from './links';
import Skills from './skills';

class Profile extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div className="Container">
                <button onClick={this.props.click}> Delete</button>
                <Bio 
                    me={this.props.profileInfo.me}
                />
                <Skills 
                    skills={this.props.profileInfo.skills}
                    changed={this.props.changed}
                />
                <Links
                    social={this.props.profileInfo.social}
                />
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Profile