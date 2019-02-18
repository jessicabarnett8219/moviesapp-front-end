import React, { Component } from 'react';

class MovieItem extends Component {

render() {

  return(
    <React.Fragment>
      {this.props.movies.map( movie => {
        return <li key={movie.id}>{movie.title}</li>
      })}
      </React.Fragment>
  )
}
}

export default MovieItem;