import userService from "../service/useService";

const handlehelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  const userList = (await userService.getUserList()) || [];
  return res.json({ list: userList });
};

const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  userService.createNewUser(email, password, username);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  const id = req.params.id;
  await userService.deleteUser(id);

  return res.redirect("/user");
};

const handleUpdateUser = async (req, res) => {
  const id = req.params.id;

  let user = {};
  const data = await userService.getUserById(id);
  user = data;
  // if (data && data.length > 0) {
  //   user = data[0];
  // }

  return res.render("edit.ejs", { user });
};

const onEditUser = async (req, res) => {
  let email = req.body.email;
  let id = req.body.id;
  let username = req.body.username;
  await userService.updateUserInfo(email, username, id);
  return res.redirect("/user");
};

module.exports = {
  handlehelloWorld,
  handleDeleteUser,
  handleUser,
  handleCreateNewUser,
  handleUpdateUser,
  onEditUser,
};
