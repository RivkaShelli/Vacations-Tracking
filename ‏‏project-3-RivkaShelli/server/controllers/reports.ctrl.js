
const express = require('express');
const router = express.Router();
const bl = require('../BL/reports.bl')


router.get('/', function (req, res) {
    let role = req.body.user.resUser.is_admin;
    bl.reports( role, (result) => {
        if (result == 401) {
            return res.status(401).send('only admin can get reports')
        } return res.send(result)
    })
});


module.exports = router;