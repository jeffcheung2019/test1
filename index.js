const express = require('express');
const app = express();
const userRouter = require("./src/routers/user")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);

app.get('/version', (req, res) => {
    res.send('version : 1.0.0');
});

app.get('/', (req, res) => {
    const reqQuery = req.query;
    console.log('###ddddddd# req.query', req.query)
    res.send('Hello World!');
});

app.post('/submit', (req, res) => {
    const reqBodyMsg = req.body.message;
    res.send(`submitted info : ${reqBodyMsg}`)
})

const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});