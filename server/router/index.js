const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({data : 'i am 3010 port'});
})

// '/' : 요청받는 경로 | req : 요청받을때 보낸 정보들, parameter가 들어있음. 
router.post('/', (req, res) => {  //post방식은 body안에 들어가서 이동하므로 body parser가 필요
    let numberParams = req.body.number;

    // 원하는 로직을 수행하면됨
    console.log(numberParams);

    let resultNumber = numberParams * 10;   
    //nodemon으로 nodemon ./server/server.js하면 node 서버도 변경된 내용에 대해서 새로 
    //서버를 시작하지 않고 저장 후 새로고침만으로 변경된 내용이 적용됩니다.
    //react는 이미 auto-reload이므로 노드서버만 신경쓰기

    res.send(
        {
            result : resultNumber,
            oriNumber : numberParams
        }
    );

    // console.log(req);               // client(web page)에서의 요청 전체 | requset header 부터 body 까지
    // console.log(req.body);          // client(web page)에서 보낸 데이터(parameter) | parameter 전체
    // console.log(req.body.number);   // client(web page)에서 보낸 데이터(parameter) 중에서 number 이름을 갖는 값 | 518
});

module.exports = router;