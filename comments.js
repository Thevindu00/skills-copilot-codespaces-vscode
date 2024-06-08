// Create web server
// npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: 'Hi, planet!' },
];
const insertComment = (comment) => {
  const id = comments.length + 1;
  comments.push({ id, ...comment });
};
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  insertComment(req.body);
  res.json(comments);
});
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
// Create client
// npm install axios
const axios = require('axios');
axios.get('http://localhost:3000/comments').then((res) => {
  console.log(res.data);
});
axios.post('http://localhost:3000/comments', {