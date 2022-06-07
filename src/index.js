import app from "./app"
import DBConnection from "./database";
const express = require('express');

const app = express();


/* app.listen(3000);
console.log('Server listen on port:', 3000) */

//Iniciar la base de datos
DBConnection();


app.listen(process.env.PORT,() => {
    console.log(`Server is working on PORT ${process.env.PORT}`);
})
