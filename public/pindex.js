const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, 'public');
console.log("hello i am sagar bhardwaj");
app.use(express.static(publicpath));

app.listen(5500);