import React, { Component } from 'react';
import contacts from './data/contacts.json'
import Famous from './Components/Famous';
import './App.css';

class App extends Component {

  state= {
    actors: contacts.slice(0,5),
  }

  addContact = () =>{
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomActor = contacts[randomIndex]
    this.setState({
      actors:[...this.state.actors, randomActor]
    })
    console.log(this.state.actors)
  }

  sortContact = () =>{
    console.log(this.state.actors)
  }

  sortContactByPopularity = () =>{
    console.log(this.state.actors)
  }

  render() {
    return (
      <div className="App">
        <h2>IronhackContacts</h2>
        <button onClick={this.addContact}>Add Random Actor</button>
        <button onClick={this.sortContact}>Sort by Name</button>
        <button onClick={this.addContact}>Sort by Polularity</button>
        <ul>
            {this.state.actors.map((actor, index) => {
            return <Famous
              key={index}
              index={index}
              image={actor.pictureUrl}
              name={actor.name}
              popularity={actor.popularity}
            />
            })}  
        </ul>
      </div>
    );
  }
}

export default App;
