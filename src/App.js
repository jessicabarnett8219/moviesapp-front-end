import React, { Component } from 'react';
import './App.css';
import Movie from './movie/Movie'

class App extends Component {

  state = {
    movies: []
  }

  updateMovies = (new_movies) => {
    this.setState({movies: new_movies})
  }

  render() {
    return (
      <div className="App">
      <Movie movies={this.state.movies} updateMovies={this.updateMovies}/>
      </div>
    );
  }
}

export default App;
