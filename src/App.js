import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  getServerData = () => {

    fetch('http://localhost:3010/',{
      method : 'GET',
      headers : {'Content-Type' : 'application/json'}
    })
    .then(res => {
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(res => console.log(res));

  }

  render(){
    return(
      <div>
        <button onClick = {this.getServerData}>btn</button>
      </div>
    )
  }
}

export default App;