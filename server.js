const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    first = req.body.first;
    second = req.body.second;

    res.json({ "result": first + second });

});


baseRouter.post('/subtract', (req, res) => {
    first = req.body.first;
    second = req.body.second;
    res.json({ "result": first - second});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});