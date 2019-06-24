import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';

class PromotionContent extends Component {

  state = {
    /** Will hold our chosen movie to display on the header */
    selectedMovie: {}
  };

  componentDidMount = () => {
    this.getMovie(63351);
      window.addEventListener("profileChange", this.handleProfileChange, false);
  };

    handleProfileChange = (event) => {
        console.info("Custom data is: ", event.detail);
        this.getMovie(event.detail.promotionId);
    };

  getMovie = (id) => {
    /** Movie Id for the Narcos series  */
    let movieId = id;
    /** Make Api call to retrieve the details for a single movie  */
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;
    axios
      .get(url)
      .then(res => {
        const movieData = res.data;
        this.setState({ selectedMovie: movieData });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
        <Header movie={this.state.selectedMovie} />
    );
  }
}

export default PromotionContent;
