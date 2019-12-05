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
      let subs =[
        {
        id:1,
        name:"xyz",
        phone:"55555"
        },
        {
          id:2,
          name:"abc",
          phone:"444"
        }
      ];
   return (
      <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom_btn add_btn">Add</button>
          </div>
     
        <div className="gridcontainer heading">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subs.map(sub => {
              return <div key={sub.id} className="grid-container">
            <span className="grid-item1">{sub.name}</span>
            <span className="grid-item1">{sub.phone}</span>
            <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn">Delete</button>
            </span>
            </div>
            })
          }
          </div>
    );
   }
    }


export default App;
