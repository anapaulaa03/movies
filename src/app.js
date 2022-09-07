const express = require('express');
const path = require('path');
const app = express();






app.listen(process.env.PORT || 3011, () => {
    console.log("Server start");
})
