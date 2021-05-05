const express = require("express");

// init express instance
const app = express();

// set the port
const PORT = process.env.PORT || 5000;

// json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./router'))

// start listening for requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));