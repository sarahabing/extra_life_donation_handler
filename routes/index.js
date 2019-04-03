/*

READ ME:
In order to use the  ES6 import statement, run `node start.js`
instead of `node app.js` or else you'll get a syntax error

This might be needed for the node extra life API module

 */
import express from 'express';
import request from 'request';
import { getTeamDonations, getTeamRoster } from 'extra-life-api';

const router = express.Router();


router.get('/', (req, res) => {
    request("https://extra-life.donordrive.com/api/teams/44021", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            getTeamDonations(44021, 50).then((donations) => {
        console.log(donations);
                getTeamRoster(44021).then(roster => {
                    res.render('index', {body: JSON.parse(body), donations: donations.donations, roster: roster.members});
                })
            })
    .catch((e) => {
        console.log(e);
    });
        }
    })

});


module.exports = router;