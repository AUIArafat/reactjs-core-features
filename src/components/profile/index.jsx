import React from 'react';
import "./profile.style.css";
import Bio from "./bio";
import Links from './links';
import Skills from './skills';

class Profile extends React.Component{
    me = {
        name:'Md Arafatul Islam',
        title: 'AI Engineer, Full Stack Developer'
    }

    skills = {
        skillA:'Python',
        skillB:'Javascript',
        skillC:'ReactJS',
    }
    
    social ={
        fbAccount:{
            title:"Facebook",
            url:'https://www.facebook.com/AUIArafat'
        },
        hackerrankAccount:{
            title:"HackerRank",
            url:'https://www.hackerrank.com/profile/auiarafat'
        },
        inAccount:{
            title:"LinkedIn",
            url:'https://www.linkedin.com/in/md-arafatul-islam-65250098/'
        },
        gitHubAccount:{
            title:"GitHub",
            url:"https://github.com/AUIArafat/"
        }
    }

    render() {
        return (
            <div className="Container">
                <Bio 
                    me={this.me}
                />
                <Skills 
                    skills={this.skills}
                />
                <Links
                    social={this.social}
                />
            </div>
        )
    }
}

export default Profile