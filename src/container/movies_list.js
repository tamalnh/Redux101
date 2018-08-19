import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import * as actions from './../actions/actions'

class MoviesList extends Component {

  componentDidMount () {
    this.props.moviesList()
  }

  renderList = (movies) => {
    if(movies) {
      return movies.map(item => {
        return (
          <div key={item.id}>{item.name}</div>
        )
      })
    }else{
      return (
        <h1>loading</h1>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, actions)(MoviesList);
