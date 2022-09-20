var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', indexRouter);

app.listen(3000); 