const axios = require('axios');
const { PORT } = process.env;

const port = PORT || 4000;

exports.homePage = (req, res) => {
    // Make get request to home page /
    axios.get(`http://localhost:${port}/`)
    .then((response) => {
        res.render('index', {resume: response.data});
    })
    .catch(error => {
        res.send(error);
    })
}