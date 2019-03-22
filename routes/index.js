/*

READ ME:
In order to use the  ES6 import statement, run `node start.js`
instead of `node app.js` or else you'll get a syntax error

This might be needed for the node extra life API module

 */
import express from 'express';
import { getTeamInfo, getTeamDonations } from 'extra-life-api';


const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;