const express = require('express');
const app = express();

const PORT = 3000;

const dotenv = require('dotenv');
dotenv.config();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','mjs','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: false
}
app.use(express.static('public', options))

module.exports = app