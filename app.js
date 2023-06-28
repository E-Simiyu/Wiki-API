const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser: true});
const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", async function(req, res){
  try {
    const foundArticles = await Article.find();
    res.send(foundArticles);
  } catch (err) {
    res.send(err);
  }
});

app.post()

app.listen(3000, function() {
  console.log("Server started on port 3000");
});