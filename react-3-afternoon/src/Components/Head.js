import React, {Component} from "react";
import data from '../data'
import './head.css'


class Head extends Component {
  render() {
    return (
      <header className='header-bar'>
        <button className='header-button' > Home </button>
      </header>
    );
  }
}

export default Head;
