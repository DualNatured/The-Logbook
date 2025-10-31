const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files (index.html, styles.css)
app.use(express.static(path.join(__dirname)));

// API: get all posts
app.get('/api/posts', (req, res) => {
  try{
    const posts = db.getAllPosts();
    res.json(posts);
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// API: create new post
app.post('/api/posts/new', (req, res) => {
  try{
    const { title, slug, content, author } = req.body || {};
    if(!title || !slug || !content){
      return res.status(400).json({ error: 'title, slug and content are required' });
    }
    const date = new Date().toISOString();
    const post = { title, slug, content, author: author || 'Anonymous', date };
    const created = db.createPost(post);
    res.status(201).json(created);
  }catch(err){
    console.error(err);
    if(err && err.code === 'SQLITE_CONSTRAINT_UNIQUE'){
      return res.status(409).json({ error: 'Slug already exists' });
    }
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
