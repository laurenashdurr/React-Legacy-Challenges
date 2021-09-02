import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
    console.log(this.state.things)
  }

  

  
  render() {
    
    //  function searchFunction() {
    //   return this.state.thing == input
    //  }

  return (
    <div>
      <Input placeholder='Search Here' />
      <h3>Results:</h3>
      <h2>
        {/* {this.state.things.filter(searchFunction)} */}
      </h2>
    </div>
  )
}
}

export default SearchIndex;
