import React, { Component } from 'react';
//import NavigationItem from './NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import NetflixLogo from '../static/images/jawwy_logo.svg';
import BellLogo from '../static/images/bell-logo.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "./DropdownContent";


class Header extends Component {
  state = {
    scrolling: false
  }

  componentDidMount() {
    console.log('component did mount heder navbar')
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }


  render() {
    const { scrolling } = this.state;
    const { showMovies } = this.props;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
         {/*<NavigationItem link="/" exact><img className="navigation__container--logo" src={NetflixLogo} alt="" /></NavigationItem>*/}
         <NetflixLogo className="navigation__container--logo"/>
          <div className="navigation__container-link pseudo-link">Home</div>
          <div className="navigation__container-link pseudo-link">TV Shows</div>
          <div className="navigation__container-link pseudo-link">Movies</div>
          <div className="navigation__container-link pseudo-link">Recently Added</div>
          <div className="navigation__container-link pseudo-link">My List</div>


          <div className="navigation__container--left">
            <SearchLogo className="logo" />
            <input
              onChange={showMovies}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />

          </div>

          <div className="navigation__container-link pseudo-link">KIDS</div>
          <div className="navigation__container-link pseudo-link">DVD</div>
          <BellLogo className="navigation__container--bellLogo" />

          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />
        </ul>
      </nav>
    )
  }
}

export default Header;
