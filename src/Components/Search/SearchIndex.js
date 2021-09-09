import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      input: ''
    }
  }


  handleInput = (e) => {
    this.setState({
       input: e.target.value
    })
}


  render() {

    let { things, input} = this.state

    return (
      <div>
        <Input placeholder='Search Here' onChange={(e) => {this.handleInput(e)}}/>
        <h3>Results:</h3>
        <h2>
          {things.filter(things => input == things)}
        </h2>
      </div>
    )
  }
}

export default SearchIndex;
