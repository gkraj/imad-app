var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' :{
  title: 'Artilce-One | Gokulakannan',
  heading: 'Article One',
  date: 'Sep 5 2017',
  content: `<p>this is m article one and also this is my first web app, lets see how it comes</p>
            <p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p><p>this is m article one and also this is my first web app, lets see how it comes</p>
  `
},
    'article-two' : {
        title: 'Artilce-Two | Gokulakannan',
        heading: 'Article-Two',
        date: 'Sep 6 2017',
        content: `<p>this is m article one and also this is my first web app, lets see how it comes</p>`
    },
    'article-three' : {
        title: 'Artilce-Three | Gokulakannan',
        heading: 'Article-Three',
        date: 'Sep 7 2017',
        content: `<p>this is m article one and also this is my first web app, lets see how it comes</p>`
    },
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=dimension-width, initial-scale=1" >
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
                <h2> ${heading} </h2>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
        <br/><hr/>
        /*<footer class="container">
        <input type="text" id="text_box" placeholder = "Comment Section"></input>
        <input type="submit" id="submit_button"></input>
        <p id="comments"></p>
        </footer> */
        </html>
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*var names = [];
app.get('/submit-name', function(req,res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
}); */

var commentobj = [];
app.get('/:articleName/submit', function(req,res){
   var text_box = req.query.text_box;
   commentobj.push(text_box);
   res.send(JSON.stringify(commentobj));
}); 

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter+1;
   res.send(counter.toString()); 
});
app.get('/:articleName', function (req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
