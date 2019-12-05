import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
class App extends Component{
 /*render()
  {
    return (
      <div>
       <div id="Header" className="header">
        Phone Directory
        </div>
        <br />
        <button id="buttonb">Add</button>
        <br />
        <div>
          <span className="classsp1">Name</span>
          <span className="classsp2">Phone</span>
        </div>
      </div>
    );
  }
}*/
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
    <div id="div1" className="Header"> </div>
    <br />
    <Header />
    <button id="Add1" className="button">Add</button> 
    <br />
    <br />
    <div>
      <span id="span1">Name</span>  
      <span id="span2">Phone</span>
    </div>
    </div>
   
   /* <div id="div1" className="Header"> Phone-Directory </div>*/
 // )
  //  } 
);
     }
    }


export default App;
