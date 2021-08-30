import React, { Component } from 'react';
import CatList from './CatList';

class CatIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {

    let { breeds } = this.state

    return (
      <div>
        <CatList cats={breeds} />
      </div>
    );
  }
}

export default CatIndex
