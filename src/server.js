import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//test connnection DB
connection();

// config view Engine
configViewEngine(app);

initWebRoutes(app);

app.listen(PORT, () => {
  console.log("JWT is te running on the : ", PORT);
});
