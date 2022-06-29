import mysql from "mysql2";

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

  connection.query("SELECT * FROM Users", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });

  return res.send("Thanh cong create");
};

module.exports = { handlehelloWorld, handleUser, handleCreateNewUser };
