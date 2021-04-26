import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" alt='cool cat'/>
      </div>
    );
  }
}

// export default CatComponent