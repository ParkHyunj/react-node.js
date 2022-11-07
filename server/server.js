const express = require('express'); 
const app = express();
const basic = require('./router/index');
const cors = require('cors');
const request = require('request');

app.use(express.urlencoded({ extended: true })); 
//application/x-www-form-urlencoded의 Content-Type에 대해 파싱해주는 역할을 하며 extended옵션에 따라 다른 라이브러리를 사용한다.
//false: node.js에 기본으로 내장된 queryString 라이브러리 사용
//true: 따로 설치가 필요한 qs 라이브러리 사용
app.use(express.json());                         //application/json의 Content-Type에 대해 파싱해주는 역할을 한다.
app.use(cors());      //cors 미들웨어를 삽입
                      //CORS policy 오류 메시지는 CORS 정책을 위반할 때 발생하게 됩니다. CORS는 Cross-Origin Resource Sharing의 약자입니다. 
                      //교차 출처 리소스 공유로 번역될 수 있는데, 브라우저에서 다른 출처의 리소스를 공유하는 방법입니다.

app.use('/', basic); //POST / 라우터

const port = 3010; 
//React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.

app.listen(port, () => {console.log("Listening on port "+ port +"..")}); // 포트번호를 문자열 합치기로 출력
// app.listen(port, () => {console.log(`Listening on port ${port}..`)}); // 포트번호를 ` (백틱) 사용해서 출력
// 충돌나지 않게 선택적으로 하나만 사용
// node ./server/server.js하면 console.log 문구가 뜹니다.