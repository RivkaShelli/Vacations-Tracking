
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bl = require ('../BL/auth.bl')


router.post('/register', function (req, res) {
    bl.newUser(req.body, (result) => {
        if (!result) {
            return res.status(400).send("username already exists");
        } else
            res.send(result);
    })
});

router.post('/login', function (req, res) {
    bl.IsUser(req.body, (result) => {
        if (result.length !== 0) {
            let resUser = result[0];
            const token = jwt.sign({resUser}, process.env.jwtsecret);
            let obj = {
                token: token,
                userid: result[0].id,
                admin: result[0].is_admin

            };
            return res.send(obj);
        } else
            return res.status(401).send("invalid username or password");
    })
        });


module.exports = router;
