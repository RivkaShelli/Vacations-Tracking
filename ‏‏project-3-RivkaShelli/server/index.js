const express = require('express');
const app = express();
const PORT = 6556;
const jwt = require('jsonwebtoken');
const vacationCtrl = require('./controllers/vacation.ctrl');
const reportsCtrl = require('./controllers/reports.ctrl');
const authCtrl = require('./controllers/auth.ctrl');

process.env.TZ = 'America / New_York';

process.env.jwtsecret = '247dhdjkjswgh738982ybhni827yhwsj89';

app.use('/images', express.static('images'));

app.use(express.json());

app.use('/api/auth', authCtrl);

app.use(function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(400).send();
    const [tokenType, jwtToken] = token.split(' ');
    try {
        jwt.verify(jwtToken, process.env.jwtsecret);
    } catch (ex) {
        console.log(ex);
        return res.status(400).send();
    }
    const user = jwt.decode(jwtToken);
    console.log(user);
    req.body.user = user;
    next();
});

app.use('/api/reports', reportsCtrl);

app.use('/api/vacation', vacationCtrl);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server up ${PORT}`, process.env.jwtsecret));


