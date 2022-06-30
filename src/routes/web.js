import express from "express";
import homeController from "../controller/homeController";
import cors from "cors";
import userService from "../service/useService";
const router = express.Router();

const initWebRoutes = (app) => {

  router.get("/", cors(), homeController.handlehelloWorld);

  router.get("/user", cors(), homeController.handleUser);

  router.post("/user/create-user", homeController.handleCreateNewUser);

  router.post("/user/delete-user/:id", homeController.handleDeleteUser);

  router.get("/user/update-user/:id", homeController.handleUpdateUser);

  router.post("/user/update-user", homeController.onEditUser);

  app.get("/user", cors(), homeController.handleUser);

  return app.use("/", router);
};

export default initWebRoutes;
