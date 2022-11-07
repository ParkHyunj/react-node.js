import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { response } from 'express';

function App() {
  const [number, setNumber] = useState(0); // 화면 출력용

  useEffect(() => {
    const params = { number: 518, money: "10000원"}; // parameter | 숫자나 문자를 추가적으로 사용할 경우 반점으로 구분 | key:value 형식으로 입력
    axios.post('http://localhost:3010/', params)
    .then ((response) => {
      // response는 요청에 대해 정상적으로 수행된경우 받아오는 결과값. | response 대신 다른 문자를 써도 무관
      console.log(response); // 
      console.log(response.data); // 
      console.log(response.data.number); // 찾은변수


      let resultData = response.data;

      setNumber(resultData.result);
    })
    .catch((err) => {console.log(err)});

  }, []);

  const getServerData = () => {

    // fetch('http://localhost:3010/',{
    //   method : 'GET',
    //   headers : {'Content-Type' : 'application/json'}
    // })
    // .then(res => {
    //   console.log(res);
    //   console.log(typeof(res));
    //   return res.json();
    // })
    // .then(res => console.log(res));

    axios.post('http://localhost:3010/', {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'}
    })
    .then ((response) =>{
      console.log(response);
    });

  }

  // react에서 숫자 하나를 node로 보내고 -> 숫자를 화면에서 입력 받게 할것임, 보내는 시점은 버튼이 클릭됬을때
  // node 에서는 받은 숫자를 x2 해주고
  // node의 실행 결과를 react에서 받고
  // 클라이언트 화면에 출력해주세요


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={getServerData}>btn</button>
          <div>{number}</div>
        </div>
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
    </div>
  );
}

export default App;