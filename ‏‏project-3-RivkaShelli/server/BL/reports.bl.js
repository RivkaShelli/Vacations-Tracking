const dal = require('../DAL');

const reports = (role, cb) => {
   if (role == 1)
        return dal.runQuery(`SELECT * FROM vacations WHERE followers != 0`, [], cb)
    return cb(401);
}


module.exports = { reports };