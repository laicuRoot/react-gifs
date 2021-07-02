import React, { Component } from 'react';
import giphy from 'giphy-api'
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifList: [],
      selectedId: null
    };
  }

  search = (query) => {
      giphy('axk8G8BI8BOYivVbJAUqRgbDyj5IMK2T').search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        // Res contains gif data!
        this.setState({
          gifList: res.data
        });
      });
    }

    updateID = (id) => {
      this.setState({
        selectedId: id
      })
    }



  render() {
    return (
      <div>

        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectedId}/>
        </div>

        <div className='right-scene'>
          <GifList idList={this.state.gifList} updateID={this.updateID} />
        </div>

      </div>
    );
  }
}

export default App;
