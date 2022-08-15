const dal = require('../DAL');

const getAll = (cb) => {
    dal.runQuery('SELECT * FROM `vacations` ORDER BY `date_from`', [], cb)
}

const add = ({ description, destination, picture, date_from, date_to, price }, role, cb) => {
    if (role == 1)
        return dal.runQuery(
            'INSERT INTO `vacations` (`description`, `destination`, `picture`, `date_from`, `date_to`, `price`) VALUES (?,?,?,?,?,?)',
            [description, destination, picture, date_from, date_to, price], cb);
    return cb(401);
}


const follow = ({ role, vid, uid }, cb) => {
    debugger;
    if (role == 0) {
        dal.runQuery('INSERT INTO `vacations_followers`(`vacation_id`,`user_id`) VALUES (?,?)', [vid, uid], (res) => {
            console.log(vid);
            if (res == null) { return cb('faild') }
            else {
                dal.runQuery('UPDATE vacations SET followers=followers+1 WHERE id=?', [vid], (result) => {
                    (result == null ? cb(401) : cb(result));
                })
            }
        })
    } else cb(401);
}

const unfollow = ({ role, vid, uid }, cb) => {
    if (role == 0) {
        dal.runQuery('DELETE FROM `vacations_followers` WHERE`vacation_id`= ? AND `user_id` = ? ', [vid, uid], (res) => {
            if (res == null) { return cb('faild') }
            else {
                dal.runQuery('UPDATE `vacations` SET `followers`=`followers` -1 WHERE `id` = ?', [vid], (result) => {
                    (result == null ? cb(401) : cb(result));
                })
            }
        })
    } else cb(401);
}

 const update = (role, { descriprion, destination, picture, date_from, date_to, price }, id, cb) => {
    if (role == 1) {
        dal.runQuery(`UPDATE vacations SET description = COALESCE(NULLIF(?,''),description),
        destination = COALESCE(NULLIF(?,''),destination),
         picture = COALESCE(NULLIF(?,''),picture),
          date_from = COALESCE(NULLIF(?,''),date_from),
           date_to = COALESCE(NULLIF(?,''),date_to),
            price = COALESCE(NULLIF(?,''),price) WHERE id =?`, [descriprion, destination, picture, date_from, date_to, price, id], cb)
    } else cb(401);
}

const remove = (role, id, cb) => {
    if (role == 1) {
        dal.runQuery('DELETE FROM `vacations_followers` WHERE `vacation_id`=?', [id], () => {
            dal.runQuery('DELETE FROM vacations WHERE id= ?', [id], (result) => {
                (result == null ? cb(401) : cb(result));
            }
            )
        })

    } else cb(401);
}

 const getByUser = (uid, cb) => {
    dal.runQuery(`SELECT v.*, COUNT(f.vacation_id) as follow FROM vacations v 
                 LEFT JOIN vacations_followers f ON f.vacation_id = v.id AND f.user_id = ? GROUP BY v.id
                 ORDER BY(f.vacation_id = v.id AND f.user_id = ?) DESC; `, [uid, uid], (result) => {
        if (result.length == 0) { cb(401) } else {
            cb(result)
        }

    })
}



module.exports = {
    getAll,
    add,
    follow,
    unfollow,
    update,
    remove,
    getByUser
}
