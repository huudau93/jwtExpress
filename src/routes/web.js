import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handlehelloWorld);

  router.get("/user", homeController.handleUser);

  router.post("/user/create-user", homeController.handleCreateNewUser);

  router.post("/user/delete-user/:id", homeController.handleDeleteUser);

  router.get("/user/update-user/:id", homeController.handleUpdateUser);
  router.post("/user/update-user", homeController.onEditUser);

  return app.use("/", router);
};

export default initWebRoutes;
