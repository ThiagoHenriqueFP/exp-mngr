const consign = require('consign/lib/consign');
const express = require('express');
const app = express();

consign({
    cwd: "src",
    verbose: true
  })
  .then("config/middlewares.js")
  .then("models")
  .then("database/server.js")
  .then("controllers")
  .then("routes")
  .into(app);

const PORT = 3000;

app.listen(PORT || process.env.PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});