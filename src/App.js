import React, { Component } from 'react';
import Table from './Table';

class App extends Table {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello react!!</h1>
//       </div>
//     );
//   }
// }

export default App;
