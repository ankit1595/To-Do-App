const mongoose = require("mongoose");

main().catch((err) => console.error("error in connecting to database ", err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/task_list_db");
  console.log("Database is successfully connected to server");
}
