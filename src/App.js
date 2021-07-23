import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Bac',
        job: 'Boucer',
      },
      {
        name: 'Dee',
        job: 'Aspring Actress',
      },
      {
        name: 'Denis',
        job: 'Bartender',
      },
    ];
  }
}

class App extends Table {
  render() {
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
