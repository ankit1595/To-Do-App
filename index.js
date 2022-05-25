const express = require("express");
const port = 8000;
const app = express();

//for static files like css, js, etc
app.use(express.static("./assets"));

//use express router
// app.use("/", require("./routes/"));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const taskList = [
  {
    description: "Make a TODO App",
    category: "Web-Dev",
    date: "2022-05-25",
  },
  {
    description: "Shopping for clothes",
    category: "Shopping",
    date: "2022-05-27",
  },
  {
    description: "Take haircut",
    category: "Personal",
    date: "2022-05-31",
  },
];

app.get("/", function (req, res) {
  return res.render("home", {
    title: "Home",
    task_list: taskList,
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting with Server");
    return;
  }
  console.log("Server is up and running at port: ", port);
});
