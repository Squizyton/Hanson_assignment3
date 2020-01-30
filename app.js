var express = require('express')
var app = express();
var port = 3000;
var highscore = [];
var x = 0;
var exphbs = require('express-handlebars')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

//app.use(express.static(__dirname+'/public'))



//this code sets up template engine as express handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
    var title = "Congrats for getting a High-Score!!!!! "
    res.render('index', {
        title: title,
    });
});


app.get('/enterscore', function (req, res) {
    res.render(__dirname + '/views/enterscore');
});

app.post('/displayscore', function (req, res) {
    console.log(req.body);

    x +=1;
    console.log(x);
    var scoreEntry= {
        entry:x,
        text: req.body.name,
        score:req.body.hiscore
    }
    
    highscore.push(scoreEntry)
    console.log(highscore.length)
    res.render(__dirname + '/views/displayscore', {

        highscore:highscore,
    })
});


app.listen(port, function () {

    console.log("Server is running on " + port)
})