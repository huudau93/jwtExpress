import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);

initWebRoutes(app);

app.listen(PORT, () => {
  console.log("JWT is te running on the : ", PORT);
});
