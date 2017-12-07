var express = require('express')
var bodyParser = require('body-parser');
var morgan = require('morgan')
var http = require('http');
var Twitter = require('twitter');
var path = require('path');

var client = new Twitter({
 consumer_key: 'OVcWQaLIJFavmkwVCnxDHvoKD',
 consumer_secret: 'NSYXVan0GFEP5e3wvKR5ThA5aXYOUCd6jOBZdWycHyYKwgsJCX',
 access_token_key: '938393528287354881-UT1AAyQl7BB0lbPb41KjdKFLlrrK7wm',
 access_token_secret: 'lst94h0z2qk5vlV0swDBWuGewqqKBFF4uOsJ1nmpwCCp8'
});

var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.post("/tweet",function (req, res) {
  console.log('inside post', req.body);
  res.end(JSON.stringify(req.body.text));
  client.post('statuses/update', {status: req.body.text},  function(error, tweet, response) {
    if(error) console.error(error);
     
  });
});

var port = 3000 || process.env.port;

app.listen(port,function(){
  console.log("listen in port 3000")
})