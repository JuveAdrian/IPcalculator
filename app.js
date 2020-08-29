const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.json({
        info: {
            msg: 'test'
        }
    })
});

module.exports = app;