// create a web server 
// 1. import express
const express = require("express");
const { request } = require("http");
const { response } = require("express");
// 2. create an express app
const app = express();

// 3. create an array of comments
const comments = [
    {username: "Todd", comment: "lol that is so funny!"},
    {username: "Skyler", comment: "I like to go birdwatching with my dog"},
    {username: "Sk8erBoi", comment: "Plz delete your account, Todd"},
    {username: "onlysayswoof", comment: "woof woof woof"},
    {username: "iliketurtles", comment: "I like turtles!"}
]

// 4. create a get route for "/comments" that returns the comments array
app.get("/comments", (request, response) => {
    response.send(comments);
});

// 5. create a get route for "/comments/:username" where username is a path parameter that returns only the comments from the specific user in the path parameter
app.get("/comments/:username", (request, response) => {
    const username = request.params.username;
    const filteredComments = comments.filter(comment => comment.username === username);
    response.send(filteredComments);
});

// 6. start the server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});