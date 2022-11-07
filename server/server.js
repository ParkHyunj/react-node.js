const express = require('express');
const app = express();
const basic = require('./router/index');
const cors = require('cors');
const request = require('request');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', basic);

const port = 3010;

// 충돌나지 않게 선택적으로 하나만 사용
// app.listen(port, () => {console.log(`Listening on port ${port}..`)}); // 포트번호를 ` (백틱) 사용해서 출력
app.listen(port, () => {console.log("Listening on port "+ port +"..")}); // 포트번호를 문자열 합치기로 출력