import React, { Component } from 'react';
import Table from './Table';

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Bac',
//         job: 'Boucer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring Actress',
//       },
//       {
//         name: 'Denis',
//         job: 'Bartender',
//       },
//     ];

//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    characters: [
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
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { characters } = this.state;

    <div className="container">
      <table characterData={characters} removeCharacter={this.removeCaracter} />
    </div>;
  }
}

export default App;
