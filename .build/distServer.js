import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/'+ req.params[0]));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});