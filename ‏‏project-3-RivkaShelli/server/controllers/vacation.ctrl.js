const express = require ('express')
const router = express.Router()
const bl = require('../BL/vacation.bl')


router.get('/', function (req, res) {
        res.send({
            uid: req.body.user.resUser.id,
            role: req.body.user.resUser.is_admin,
            username:req.body.user.resUser.username
        });
});

router.post('/add', function (req, res) {
    debugger;
    let role = req.body.user.resUser.is_admin;
    bl.add(req.body, role, (result) => {
        if (result == 401) {
            console.log(1);
            return res.send(401)
        }
        console.log(result);
        return res.send(result);
    })
});

router.post('/follow', function (req, res) {
    debugger;
    let a = {
        role: req.body.user.resUser.is_admin,
        vid: req.body.vid,
        uid: req.body.user.resUser.id,
    }
    console.log(a);
    bl.follow(a, (result) => {
        if (result == 401)
            return res.status(401).send('only user can follow');
        return res.send(result);
    })
})
router.post('/unfollow', function (req, res) {
    let a = {
        role: req.body.user.resUser.is_admin,
        vid: req.body.vid,
        uid: req.body.user.resUser.id
    }
    bl.unfollow(a, (result) => {
        if (result == 401)
            return res.status(401).send('only user can unfollow');
        return res.send(result);
    })

})

router.put('/update/:id', function (req, res) {
    let role = req.body.user.resUser.is_admin;
    bl.update(role, req.body, req.params.id, (result) => {
        if (result == 401)
            return res.status(401).send('only admin can update');
        return res.send(result);
    })

})

router.delete('/delete/:id', function (req, res) {
    debugger;
    let role = req.body.user.resUser.is_admin;
    bl.remove(role, req.params.id, (result) => {
        if (result == 401)
            return res.status(401).send('only admin can delete');
        return res.send(result);
    })

})

router.get('/allVacationsByUser/:uid', function (req, res) {
    debugger;
    bl.getByUser(req.params.uid, (result) => {
        if (result.length == 0) {
            throw err
        } else
            return res.send(result)
    })
})

module.exports = router;

