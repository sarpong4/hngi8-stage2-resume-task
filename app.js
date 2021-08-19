const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
require('dotenv').config();
const connectionDB = require('./src/database/setup');


const app = express();

const port = process.env.PORT || 4000;

// mongodb connection and view engine setup
connectionDB();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

// set statics folders
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})