var express = require('express');
var router = express.Router();
// const multer = require('multer');
const mongoose = require("mongoose");
const { dbUrl } = require("../config/dbConfig");
const { UserModel } = require("../schema/usersschema.js");
const {
  hashPassword,
  hashCompare,
  createToken,
  decodeToken,
  validate,
  upload,
  roleSalesRep,
  roleAdmin,
  roleStudent,
} = require("../config/auth");

// const upload = multer({ dest: 'uploads/' });
mongoose.set("strictQuery", true);
mongoose.connect(dbUrl);

// const imgconfig=multer.diskStorage({
//   destination:(req,file,callback)=>{
//     callback(null,"./uploads")
//   },
//   filename:(req,file,callback)=>{
//     callback(null,`image-${Date.now()}.${file.originalname}`)
//   }
// })

// const isImage=(req,file,callback)=>{
//   if(file.mimetype.startsWith("image")){
//     callback(null,true)
// }else{
//   callback(new Error("only images are allowed"))
// }
// }

// const upload=multer({
//   storage:imgconfig,
//   fileFilter:isImage
// })

router.post('/api/submit-form', upload.single('image'), async (req, res) => {
  const data = req.body;
  data.photo = req.file.path;
console.log(data.photo)
console.log(data)
  try {
    const application = new UserModel(data);
    console.log(application)
    await application.save();
    res.status(201).send({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to submit application' });
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