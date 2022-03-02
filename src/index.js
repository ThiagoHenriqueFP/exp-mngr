const consign = require('consign/lib/consign');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3333;

consign({
    cwd: "src",
    verbose: false
  })
  .then("config/middlewares.js")
  .then("models")
  .then("database/server.js")
  .then("controllers")
  .then("routes")
  .into(app);

app.get('/', () => {
  res.send('hello world')
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});