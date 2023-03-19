const express = require('express');
const app = express();

const PORT = 3000;

const dotenv = require('dotenv');
dotenv.config();

window.OPENAI_KEY = process.env.OPENAI_KEY;

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','mjs','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: false
}
app.use(express.static('public', options))

app.get('/env', (req, res) => {
    res.json(process.env);
});
  

module.exports = app
