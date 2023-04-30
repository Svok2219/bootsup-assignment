const express = require("express");
const { Authenticate } = require("../Model/Authenticate");
const router = express.Router();

router.post("/", async (req, res) => {
  const PostedValidationBody = await Authenticate.find({
    email: req.body.email,
    password: req.body.password,
  });
  if (PostedValidationBody.length === 0 || PostedValidationBody.length > 1) {
    res.status(400).json({ success: false });
  } else {
    res.status(200).json({ success: true });
  }
});

router.post("/Create", async (req, res) => {
  console.log(req.body);
  const AuthenticatesBody = new Authenticates({
    email: req.body.email,
    password: req.body.password,
    Name: req.body.Name,
  });
  const PostedAuthenticatesBody = await AuthenticatesBody.save();
  if (!PostedAuthenticatesBody)
    return res
      .status(400)
      .json({ success: false, message: "User Creation was not Successful" });
  res.status(200).json({
    success: true,
    content: PostedAuthenticatesBody,
    message: "User Creation Successful",
  });
});

module.exports = router;
