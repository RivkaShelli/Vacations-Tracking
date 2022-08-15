
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'project_3'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});

const runQuery = async (sql, variables, cb) => {
    return con.query(sql, variables, function (err, result) {
        if (err) {
            console.log(err);
            return cb ? cb(null) : null
        } else
            console.log(result);
            return cb ? cb(result) : null;
        
    })
}

module.exports = { runQuery };