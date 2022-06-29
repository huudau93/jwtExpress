import bcryptjs from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const hashPassword = (userPassword) => {
  const salt = bcryptjs.genSaltSync(10);
  const hashPasswords = bcryptjs.hashSync(userPassword, salt);
  return hashPasswords;
};

const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "user",
    Promise: bluebird,
  });
  let hashPass = hashPassword(password);

  connection.query(
    "INSERT INTO UserApps (email, password, username,createdAt,updatedAt) VALUES (?,?,?,?,?) ",
    [email, hashPass, username, new Date(), new Date()],
    function (err, results, fields) {
      if (err) {
        console.log("coloi", err);
      }
      console.log(results);
    }
  );
};

const getUserList = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "user",
      Promise: bluebird,
    });
    let user = [];
    const [rows] = await connection.execute("SELECT * FROM UserApps");
    return rows;
  } catch (e) {
    console.log("loi ", e);
  }
};

module.exports = { createNewUser, getUserList };
