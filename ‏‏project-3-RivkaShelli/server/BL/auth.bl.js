const dal = require('../DAL');

 const IsUser = ({ username, password }, cb) => {
    dal.runQuery(
        `SELECT * FROM users WHERE username=? AND password=?;`, [username, password], cb);

}
 const newUser = ({ first_name, last_name, username, password }, cb) => {
    dal.runQuery('INSERT INTO users( first_name, last_name, username, password) VALUES(?,?,?,?)',
        [first_name, last_name, username, password], cb);
}


module.exports = {
    IsUser,
    newUser
};
