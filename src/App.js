import React from 'react';
import "./App.css";
import Profile from "./components/profile";
import Person from "./components/person";
import {Button} from "./style"
import Radium, { StyleRoot } from 'radium';
class App extends React.Component {
  profileA = {
    id: 1,
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

  profileB = {
    id: 2,
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

  profileC = {
    id: 3,
    me: {
      name: "Md Maruf Rayhan",
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
  
  state = {
    users: [this.profileA, this.profileB, this.profileC],
    showPerson:false,
  };

  togglePersonHandler = () =>{
    console.log(this.state.showPerson);
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  deletePersonHandler = (personIndex) =>{
      console.log(personIndex);
      const persons = this.state.users;
      persons.splice(personIndex, 1);
      this.setState({
        users:persons
      })
  }
  updatePersonHandler = (event, index) =>{
      const personIndex = this.state.users.findIndex(el => {
        return el.id === index
      });
      const person = {
        ...this.state.users[personIndex]
      };
      person.skills.skillA = event.target.value;

      const persons = [...this.state.users];
      persons[personIndex] = person

      this.setState({
        users: persons
      })
      console.log(personIndex, person);
  }
  render() {
    let profile = null;
    const style = { 
      border:'1px solid #000',
      padding: '10px',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'rgb(150, 25, 21)' ,
      ':hover': {
        backgroundColor:'rgb(209 50 45)',
        color: 'black'
      }
    }
    console.log(this.state.users)
    if(this.state.showPerson){
      profile = (
        <div>
          {
            this.state.users.map((user, index) => {
              return <Profile 
                      click={() => this.deletePersonHandler(index)} 
                      profileInfo={user} key={index}
                      changed={(event) => this.updatePersonHandler(event, user.id)}
                    />
            })
          }
        </div>
      );
      style.backgroundColor = 'blueviolet' 
      style[':hover'] = {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    }
    return (
      <StyleRoot>
        <div className="App"> 
          <Button primary 
            onClick={this.togglePersonHandler} 
            // style={style}
          >Show Person</Button>
          {
          this.state.showPerson === true ? (
            <div>
              <Person/>
              <hr/>
            </div>
            ) : null
          }
          {profile}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
