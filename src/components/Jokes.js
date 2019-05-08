import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Joke = ({ joke: { setup, punchline } }) => {
  return <p style={{ margin: 20}}>{setup} <i>{punchline}</i></p>
}

class Jokes extends Component { 
  state = {
    joke: {},
    jokeArray: []
  };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(joke => this.setState( { joke } ));
  }

  getMoreJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(jokeArray => { this.setState( { jokeArray } ) });
  }

  render () {
    const { joke } = this.state;

    return (
      <div>
        <h3>Random Joke</h3>
        <Joke joke={joke} />
        <p></p>
        <button onClick={this.getMoreJokes}>Get more jokes!</button>
        {
          this.state.jokeArray.map(joke => {
            return <Joke key={joke.id} joke={joke} />
          })
        }
      </div>
    )
  }
}

Jokes.propTypes = {
  jokeArray: PropTypes.array,
};

export default Jokes;
