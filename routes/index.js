var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { dbUrl } = require("../config/dbConfig");
const { UserModel } = require("../schema/usersschema.js");
const {
  hashPassword,
  hashCompare,
  createToken,
  decodeToken,
  
} = require("../config/auth");

mongoose.set("strictQuery", true);
mongoose.connect(dbUrl);

router.post("/users", async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      
      let doc = new UserModel(req.body);
      console.log(doc)
      await doc.save();
      res.status(201).send({
        message: "User Created successfully",
      });
    } else {
      res.status(400).send({ message: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

router.get("/view", async (req, res) => {
  try {
    let applicants = await UserModel.find();
    res.status(201).send({
      message: "Applicants Details",
      applicants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

module.exports = router;