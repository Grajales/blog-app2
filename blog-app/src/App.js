// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// Bring in React instance from React
import React from 'react';
import logo from './logo.svg';
import './App.css';

// Define our Hello component
function Hello(props) {
  // Make sure to return some UI
  return <h1>Hello {props.name} you are {props.age} years old</h1>;
}

export default Hello; //Export 
