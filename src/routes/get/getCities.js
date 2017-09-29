'use strict';

const Router = require('restify-router').Router;
const router = new Router();

router.get('/cities', (req, res, next) => {
    const result = {
        name: "anthony",
        society: "lafourchette"
    };

    res.send(result);
    next();
});

module.exports = router;
