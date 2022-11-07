import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState(0); // 화면 출력용

  useEffect(() => {
    const params = { number : 518 }; // parameter | 숫자나 문자를 추가적으로 사용할 경우 반점으로 구분 | key:value 형식으로 입력
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

    axios.post('http://localhost:3010/', {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'}
    })
    .then ((response) =>{
      console.log(response);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={getServerData}>btn</button>
          <div>{number}</div>
        </div>
      </header>
    </div>
  );
}

export default App;