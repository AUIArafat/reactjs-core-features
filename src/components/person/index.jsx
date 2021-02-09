import React, {useState} from 'react';
import Profile from '../../components/profile';
import Radium from 'radium';
const Person = props => {
    let profileA = {
        me: {
          name: "Md Arafatul Islam",
          title: "AI Engineer, Full Stack Developer",
        },
        skills: {
          skillA: "Python",
          skillB: "Javascript",
          skillC: "ReactJS",
        },
        social: {
          fbAccount: {
            title: "Facebook",
            url: "https://www.facebook.com/AUIArafat",
          },
          hackerrankAccount: {
            title: "HackerRank",
            url: "https://www.hackerrank.com/profile/auiarafat",
          },
          inAccount: {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/md-arafatul-islam-65250098/",
          },
          gitHubAccount: {
            title: "GitHub",
            url: "https://github.com/AUIArafat/",
          },
        },
      };
    
    let profileB = {
        me: {
            name: "Md Rezwanul Haque",
            title: "AI Engineer, Full Stack Developer",
        },
        skills: {
            skillA: "Python",
            skillB: "Javascript",
            skillC: "ReactJS",
        },
        social: {
            fbAccount: {
            title: "Facebook",
            url: "https://www.facebook.com/AUIArafat",
            },
            hackerrankAccount: {
            title: "HackerRank",
            url: "https://www.hackerrank.com/profile/auiarafat",
            },
            inAccount: {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/md-arafatul-islam-65250098/",
            },
            gitHubAccount: {
            title: "GitHub",
            url: "https://github.com/AUIArafat/",
            },
        },
    };

    const [personState, setPersonState] = useState({
        persons : profileA
    });

    const switchNameHandler = (name) =>{
      profileB.me.name = name;
        setPersonState({
            persons: profileB
        })
    }

    const updateSkillsHandler = (event) =>{
      profileB.skills.skillA = event.target.value;
      setPersonState({
          persons: profileB
      }) 
    }
    const style ={
      '@media (max-width:500px)':{
        width: '100%',
        backgroundColor: 'green'
      }
    }
    return(
        <div style={style}>
            <button onClick={switchNameHandler.bind(personState, 'Max')}>Switch Name</button>
            <Profile 
              profileInfo={personState.persons} 
              changed={updateSkillsHandler}  
            />
        </div>
    );
}

export default Radium(Person)