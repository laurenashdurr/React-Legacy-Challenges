import React, { Component } from 'react';

class CatList extends Component {

  constructor(props) {
    super(props)
    console.log(this.props.cats)
  }

  render() {
    return (
      <div>
        {this.props.cats.map(cat => <li>{cat}</li>)}
      </div>
    )
  }
}

export default CatList;
