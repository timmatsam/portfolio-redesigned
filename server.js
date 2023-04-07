const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path  = require('path');
app.use(function(req, res, next) {
    if (req.headers["x-forwarded-proto"] === "http") {
      console.log('redirecting to https')
      res.redirect("https://" + req.headers.host + req.url);
    } else {
      console.log('not redirecting')
      next();
    }
  });
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  
app.listen(port, () => {
    console.log(`Web app listening on port ${port}`)
})