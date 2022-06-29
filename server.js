const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/portfolio2'))

app.get('/*', (req, res) => {
    res.sendFile('index.html'), { root: 'dist/portfolio2' }
});

app.listen(process.env.PORT || 8080);