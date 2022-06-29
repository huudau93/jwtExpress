import bcryptjs from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index.js";

const hashPassword = (userPassword) => {
  const salt = bcryptjs.genSaltSync(10);
  const hashPasswords = bcryptjs.hashSync(userPassword, salt);
  return hashPasswords;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  try {
    await db.UserApp.create({
      email: email,
      password: hashPass,
      username: username,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    // const connection = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   database: "user",
    //   Promise: bluebird,
    // });

    // const [rows] = await connection.execute(
    //   "INSERT INTO UserApps (email, password, username,createdAt,updatedAt) VALUES (?,?,?,?,?) ",
    //   [email, hashPass, username, new Date(), new Date()]
    // );
  } catch (e) {
    console.log(e);
  }
};

const getUserList = async () => {
  try {
    let user = [];
    user = await db.UserApp.findAll();
    return user;
    // const connection = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   database: "user",
    //   Promise: bluebird,
    // });
    // let user = [];
    // const [rows] = await connection.execute("SELECT * FROM UserApps");
    // return rows;
  } catch (e) {
    console.log("loi ", e);
  }
};

const deleteUser = async (id) => {
  try {
    await db.UserApp.destroy({
      where: { id: id },
    });
    // const connection = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   database: "user",
    //   Promise: bluebird,
    // });
    // let user = [];
    // const [rows] = await connection.execute("DELETE FROM UserApps WHERE id=?", [
    //   id,
    // ]);
    // return rows;
  } catch (e) {
    console.log("loi ", e);
  }
};

const getUserById = async (id) => {
  try {
    let user = {};
    user = await db.UserApp.findOne({
      where: { id: id },
    });
    console.log(user.get({ plainl: true }));
    return user.get({ plainl: true });
    // const connection = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   database: "user",
    //   Promise: bluebird,
    // });

    // const [rows] = await connection.execute(
    //   "SELECT * FROM UserApps WHERE id=?",
    //   [id]
    // );

    // return rows;
  } catch (e) {
    console.log("loi ", e);
  }
};

const updateUserInfo = async (email, username, id) => {
  try {
    await db.UserApp.update(
      {
        email: email,
        username: username,
      },
      {
        where: { id: id },
      }
    );
    // const connection = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   database: "user",
    //   Promise: bluebird,
    // });

    // const [rows] = await connection.execute(
    //   "UPDATE  UserApps set email = ? ,username =? WHERE id= ? ",
    //   [email, username, id]
    // );

    // return rows;
  } catch (e) {
    console.log("loi ", e);
  }
};

module.exports = {
  createNewUser,
  deleteUser,
  getUserList,
  getUserById,
  updateUserInfo,
};
