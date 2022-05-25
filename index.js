const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const TaskDetails = require("./models/task_details");

//for static files like css, js, etc
app.use(express.static("./assets"));

//use express router
// app.use("/", require("./routes/"));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// parse form data into an object
app.use(express.urlencoded());

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

app.post("/add-task", function (req, res) {
  // taskList.push(req.body);
  TaskDetails.create(req.body, function (err, newTask) {
    if (err) {
      console.log("Error in adding task, error: ", err);
      return;
    }
    console.log("Added Task: ", newTask);
    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting with Server");
    return;
  }
  console.log("Server is up and running at port: ", port);
});
