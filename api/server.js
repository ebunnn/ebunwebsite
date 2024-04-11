const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
const cors = require('cors');
const Post = require('./Models/blogpost_model');
require('dotenv').config();


const app = express();
const port = 4000;
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
const connectionURI = `mongodb+srv://ebunoludemi:${process.env.MONGODB_PASSWORD}@ebunwebsite-blog.barklme.mongodb.net/EbunWebsiteBlogPosts?retryWrites=true&w=majority&appName=ebunwebsite-blog`;

mongoose.connect(connectionURI).then(() => {
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
}).catch((error) => {
    console.log('COULD NOT CONNECT TO DATABASE:', error.message);
});


app.post('/api/post-blog', async (req, res) => {
  try {
      const newPost = new Post({
          title: req.body.title,
          postText: req.body.postText
      });
      await newPost.save();
      res.status(201).send('Post created successfully');
  } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).send('An error occurred while creating the post');
  }
});

app.get('/api/get-posts', async (req, res) => {
  try {
      const posts = await Post.find();
      res.status(200).send(posts);
  } catch (err) {
      console.error('Error fetching posts:', err);
      res.status(500).send('Internal Server Error');
  }
});


  app.delete('/api/delete-post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        await Post.findByIdAndDelete(postId);
        res.status(200).send('Post deleted successfully');
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});