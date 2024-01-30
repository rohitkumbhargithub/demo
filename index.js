const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('<h1>Hello World</>');
})

app.get('/user', (req, res) => {
	res.send('<h1>Hello 3 World</>');
})


app.listen(port, console.log(port));