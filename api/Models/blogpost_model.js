const mongoose = require('mongoose');


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    console.log(hours);
    console.log(ampm);
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' +minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
// var currentTime = formatAMPM(new Date);
// var currentDate = new Date().toDateString();

const postSchema = new mongoose.Schema({
    userID: Number,
    title: String,
    postText: String,
    date: { type: String, default: () => new Date().toDateString() },
    time: { type: String, default: () => formatAMPM(new Date()) },
    author: String
  });

const Post = mongoose.model('BlogPosts', postSchema);

module.exports = Post;