import React, { Component } from 'react';
import MovieList from './MovieList'

class Movie extends Component {

  componentDidMount() {
    fetch('http://127.0.0.1:8000/movies')
      .then(stuff => stuff.json())
      .then(movies => {
        this.props.updateMovies(movies)
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Movies and Stuff</h1>
        <ul>
          <MovieList movies={this.props.movies} />
        </ul>
      </React.Fragment>
    )
  }

}



export default Movie;