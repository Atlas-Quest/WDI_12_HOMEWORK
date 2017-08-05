var app = require('express')();
var _ = require('lodash');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "You so Fancy",
  "Hawkeyes",
]

var backgroundColors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function index(req, res) {
  res.render('index', {compliment: _.sample(compliments), color: _.sample(backgroundColors)})
}

function name(req, res) {
  res.render('index', {compliment: 'Hi ' + req.params.name + ', ' + _.sample(compliments), color: _.sample(backgroundColors)})
}

function add(req, res) {
  res.render('add', {color: _.sample(backgroundColors)})
}

function newCompliments(req, res) {
  compliments.push(req.body.newCompliment);
  res.render('added', {newCompliment: req.body.newCompliment, color: _.sample(backgroundColors)})
}

app.post('/new', urlencodedParser, newCompliments);
app.get('/add', add);
app.get('/:name', name);
app.get('/', index);
app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
})
