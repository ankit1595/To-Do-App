module.exports.home = function (req, res) {
  res.render("home", { title: "Home" });
};

module.exports.addTask = function (req, res) {
  res.end("<h1>Add task</h1>");
};

module.exports.deleteTask = function (req, res) {
  res.end("<h1>task deleted</h1>");
};
