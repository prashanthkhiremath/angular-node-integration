const express = require('express');
const path = require('path');
const app = express();

// Getting our POSTS routes

const posts = require('./server/routes/posts');

// Using middleware

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

// Catch all other routes request and return it to the index

app.get('*',( req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'));
})

const port = process.env.PORT || 4500;

app.listen(4500, (req, res)=> {
  console.log(`RUNNING on port ${port}`);
});


