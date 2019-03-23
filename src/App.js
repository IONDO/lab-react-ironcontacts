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
  }

  sortContact = () => {
     this.state.actors.sort( (actor1,actor2) => 
      actor1.name.localeCompare(actor2.name)
    );
    this.setState({
      actors:this.state.actors
    })
  }

  sortContactByPopularity = () => {
     this.state.actors.sort( (actor1,actor2) => {
      if (actor1.popularity < actor2.popularity) {
        return 1;
      }
      if (actor1.popularity > actor2.popularity) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    this.setState({
      actors:this.state.actors
    })
  }

  deleteContact = (index) => {
    this.state.actors.splice(index,1);
    this.setState({
     actors: this.state.actors
    })
    console.log(this.state.actors);
  }

  render() {
    return (
      <div className="App">
        <h2>IronhackContacts</h2>
        <button onClick={this.addContact}>Add Random Actor</button>
        <button onClick={this.sortContact}>Sort by Name</button>
        <button onClick={this.sortContactByPopularity}>Sort by Polularity</button>
        <ul>
            {this.state.actors.map((actor, index) => {
            return <Famous
              key={index}
              index={index}
              image={actor.pictureUrl}
              name={actor.name}
              popularity={actor.popularity}
              contactDeleted={this.deleteContact}
            />
            })}  
        </ul>
      </div>
    );
  }
}

export default App;
