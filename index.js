const express = require("express");
const port = 8000;

const app = express();
app.use("/", require("./routes/"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting with Server");
    return;
  }
  console.log("Server is up and running at port: ", port);
});
