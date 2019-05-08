import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";

class App extends Component {
  state = { displayBio: false }

  toggleInfo = () => {
    this.setState({
      displayBio: !this.state.displayBio
    });
  }

  render(){
    return(
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1006264949801410560/hcOf1bZS_400x400.jpg"
          className="profileImage"  
          alt="profile"
        />
        <h2>Hello!</h2>
        <Title />
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Wisconsin, grew up around the world.</p>
              <p>My favorite language is C#, learning React.js now!</p>
              <button onClick={this.toggleInfo}>
                Show Less
              </button>
            </div>
          ) : <button onClick={this.toggleInfo}>
                Read More
              </button>
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
