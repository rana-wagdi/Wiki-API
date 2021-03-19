const express = require("express");
const bodyParser = require("body-Parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/wikDB", { useNewUrlParser: true });

const articaleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articaleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

app.get("/articles", )
//postman:)
app.post('/articles', )

app.delete("/articles", );
// [
//   ({
//     _id: "60515565187eb9938097364b",
//     title: "REST",
//     content:
//       "REST is short for REpresentational State Transfer. It's an architectural style for desinging APIs",
//   },
//   {
//     _id: "5c139771d79ac8eac11e754a",
//     title: "API",
//     content:
//       "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.",
//   },
//   {
//     _id: "5c1398aad79ac8eac11e7561",
//     title: "Bootstrap",
//     content:
//       "This is a framework developed by Twitter that contains pre-made front-end templates for web design",
//   },
//   {
//     _id: "5c1398ecd79ac8eac11e7567",
//     title: "DOM",
//     content:
//       "The Document Object Model is like an API for interacting with our HTML",
//   },
//   {
//     _id: "60540194385162199477d1f4",
//     title: "jack baur",
//     content: "tack bar quick",
//     __v: 0,
//   })
// ];
//TODO

app.listen(3000, function(){
    console.log("Server started on port 3000")
})

