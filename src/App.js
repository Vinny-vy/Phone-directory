import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
class App extends Component{
 
//function App() {
/*render()
{
  return  (
    <div>

      Phone Directory
    </div>
  )
}
}*/
 /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    render()
    {
   return (
      <div>
      <Header />
      <div className="component-body-container">
        <button className="custom_btn add_btn">Add</button>
        <div className="gridcontainer heading">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
      </div>
    </div>
   
);
     }
    }


export default App;
