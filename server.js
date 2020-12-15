const express = require('express');
const { reset } = require('nodemon');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
