const express = require('express');
const app = express();
const port = 3000;

// const CoinFlip = require('./models/coin-flip');


function coinFlip(req, res, next) {
    let flipResult = Boolean(Math.round(Math.random()));
    console.log(flipResult)
    if (flipResult) {
        res.redirect('/heads');
    } else {
        res.redirect('/tails');
    }
}
app.get('/', (coinFlip));

function heads(req, res) {
    res.send('heads');
}
app.get('/heads', (heads))

function tails(req, res) {
    res.send('tails');
}
app.get('/tails', (tails))


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



