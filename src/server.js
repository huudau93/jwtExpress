import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
configViewEngine(app);

initWebRoutes(app);


app.listen(PORT, () => {
  console.log("JWT is te running on the : ", PORT);
});
