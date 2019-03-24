import React, { Component } from 'react';

const imageStyle = {
  width: '5.5rem',
  height: '5.5rem'
};

class Famous extends Component {

  deleteContact = () => this.props.contactDeleted(this.props.index)

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Picture</th> 
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map( (actor, index) =>
                <tr>
                  <td><img src={actor.pictureUrl} alt='' style={imageStyle}/></td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  <td><button onClick={this.deleteContact}>Delete</button></td>
                </tr>
              )}
          </tbody>    
        </table>
      </>
    );
  }
}

export default Famous;