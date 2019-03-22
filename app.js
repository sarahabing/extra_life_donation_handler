import express from 'express';
const app = express();
import path from 'path';
import sass from 'node-sass-middleware';

const index = require ('./routes/index');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(
    sass({
        src: __dirname + '/sass',
        dest: __dirname + '/public',
        debug: true
    })
);

app.use(express.static( path.join( __dirname, 'public' ) ) );

app.use('/', index);



app.listen(3000, function () {
    console.log('Serving on localhost:3000 boiii!')
});

module.exports = app;