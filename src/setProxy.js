const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        proxy('/', {                           //도메인 api로 호출
            target : 'http://localhost:3010/'  //통신할 서버의 도메인주소
        })
    )
}

//통신을 위한 axios 라이브러리 설치 npm install axios