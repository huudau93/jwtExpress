import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handlehelloWorld);

  router.get("/user", homeController.handleUser);

  router.post("/user/create-user", homeController.handleCreateNewUser);

  return app.use("/", router);
};

export default initWebRoutes;
