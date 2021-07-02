import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  list = (props) => {
    return this.props.idList.map(id => {
      return <Gif key={id.id} id={id.id} updateID={this.props.updateID} />;
    });
  }

  render(){
    return(
      <div className='gif-list'>
        {this.list()}
      </div>
      )
  }
}

export default GifList;
