const express = require('express');
const app = express();
const basic = require('./router/index');
const cors = require('cors');
const request = require('request');

app.use(cors());
app.use('/', basic);

const port = 3010;
app.listen(port, () => {console.log('Listening on port ${port}..')});