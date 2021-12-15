const express = require('express');


const PORT = 3000;
const app = express();

app.listen(PORT || process.env.PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});