const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/success-stories", (req, res) => {
  res.send([
    {
      id: 1,
      title: "How I learned to code",
    },
  ]);
});

app.get("/api/v1/success-stories/:id", (req, res) => {
    res.send({
        id: 1,
        title: "How I learned to code",
    });
    });



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
