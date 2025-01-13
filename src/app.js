const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
//

app.post("/signup", async (req, res) => {
  // Creating new instance od user models
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added succesfully");
  } catch {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
  
connectDB()
  .then(() => {
    console.log("Database connection establised....");
    app.listen(3000, () => {
      console.log("server is successfully listening on port 3000.....");
    });
  })
  .catch((err) => {
    console.error("Database connot be connected", err);
  });
