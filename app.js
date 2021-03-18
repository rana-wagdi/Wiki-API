const express = require("express");
const bodyParser = require("body-Parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

mongoose.connect('mongodb://localhost:27017/wikDB', {userNewUrlParser: true});

const articaleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articaleSchema);
    app
//TODO

app.listen(3000, function(){
    console.log("Server started on port 3000")
})

