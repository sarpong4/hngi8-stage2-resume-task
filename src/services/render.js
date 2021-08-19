const axios = require('axios');


const port = process.env.PORT || 4000;

exports.home = (req, res) => {
    axios.get(`http://localhost:${port}/`)
    .then((response) => {
        res.render('contact')
    })
    .catch (error => {
        res.send(error)
    })
}