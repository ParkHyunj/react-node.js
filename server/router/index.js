const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({data : 'i am 3010 port'});
})

module.exports = router;