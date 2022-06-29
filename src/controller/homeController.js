import mysql from "mysql2";
import user from "../models/models/user";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
});

const handlehelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  console.log(email, password, username);
  connection.query(
    "INSERT INTO UserApps (email, password, username,createdAt,updatedAt) VALUES (?,?,?,?,?) ",
    [email, password, username, new Date(), new Date()],
    function (err, results, fields) {
      if (err) {
        console.log("coloi", err);
      }
      console.log(results);
    }
  );

  return res.send("Thanh cong create");
};

module.exports = { handlehelloWorld, handleUser, handleCreateNewUser };
