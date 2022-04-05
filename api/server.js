const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user.js");
const pictureRouter = require("./routes/pictures.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.json({ message: "Welcome to H-Rent's API" });
});

app.use("/api/user", userRouter);
app.use("/api/pictures", pictureRouter);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({ message: err.message });
  return;
});

app.listen(PORT, () => console.log("App is running on port 8080"));
