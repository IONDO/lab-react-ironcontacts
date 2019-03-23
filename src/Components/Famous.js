import React, { Component } from 'react';

class Famous extends Component {

  deleteContact = () => this.props.contactDeleted(this.props.index)

  render() {
    return (
      <ul>
        <li>
          <img src={this.props.image} alt=''/>
          <p>{this.props.name}</p>
          <p>{this.props.popularity}</p>
          <button onClick={this.deleteContact}>Delete</button>
        </li>
      </ul>
    );
  }
}

export default Famous;