import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component {
  state = { displayBio: true }

  toggleInfo = () => {
    this.setState({
      displayBio: !this.state.displayBio
    });
  }

  render(){
    return(
      <div>
        <h2>Hello!</h2>
        <p>I like to work on things.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Wisconsin, grew up around the world.</p>
              <p>My favorite language is C#, learning React.js now!</p>
              <p>Besides coding I love new tech, and gaming.</p>
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
