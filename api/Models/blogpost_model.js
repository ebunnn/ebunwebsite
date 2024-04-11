const mongoose = require('mongoose');


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'AM' : 'PM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
var currentTime = formatAMPM(new Date);
var currentDate = new Date().toDateString();

const postSchema = new mongoose.Schema({
    title: String,
    postText: String,
    date: { type: String, default: currentDate },
    time: { type: String, default: currentTime },
    author: { type: String, default: "Ebun" },
  });

const Post = mongoose.model('BlogPosts', postSchema);

module.exports = Post;