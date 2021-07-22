import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table class="pure-table pure-table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Wyltamar</td>
            <td>Cordenator</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspirng actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   );
// };

// const TableBody = () => {
//   return (
//     <tbody>
//       <tr>
//         <td>Charlie</td>
//         <td>Janitor</td>
//       </tr>
//       <tr>
//         <td>Wyltamar</td>
//         <td>Cordenator</td>
//       </tr>
//       <tr>
//         <td>Dee</td>
//         <td>Aspirng actress</td>
//       </tr>
//       <tr>
//         <td>Dennis</td>
//         <td>Bartender</td>
//       </tr>
//     </tbody>
//   );
// };

// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <TableHeader />
//         <TableBody />
//       </table>
//     );
//   }
// }

export default Table;
