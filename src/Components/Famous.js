import React, { Component } from 'react';

class Famous extends Component {

  addingContact = () => {
    return this.props.contactAdded;
  }
    render() {
      return (
        <ul>
          <li>
            <img src={this.props.image} alt=''/>
            <p>{this.props.name}</p>
            <p>{this.props.popularity}</p>
          </li>
        </ul>
      );
    }
  }
  
  export default Famous;