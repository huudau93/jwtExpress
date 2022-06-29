import user from "../models/models/user";
import userService from "../service/useService";

const handlehelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  const userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  userService.createNewUser(email, password, username);

  return res.send("Thanh cong create");
};

module.exports = { handlehelloWorld, handleUser, handleCreateNewUser };
