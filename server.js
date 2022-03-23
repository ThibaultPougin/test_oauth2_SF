require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen (port, () => {
    console.log(`Server started on http://localhost:${port}`);
});