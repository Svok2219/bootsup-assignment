const express = require("express");
const { Books } = require("../Model/BooksModel");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const BooksBody = new Books({
    Name: req.body.Name,
    picture: req.body.picture,
    Author: req.body.BooksAuthor,
  });
  const PostedBooksBody = await BooksBody.save();
  if (!PostedBooksBody)
    return res
      .status(400)
      .json({ success: false, message: "Submission was not Successful" });
  res.status(200).json({
    success: true,
    content: PostedBooksBody,
    message: "Submission Successful",
  });
});

router.get("/getAllBooks", async (req, res) => {
  const Bookss = await Books.find();

  if (!Bookss) return res.status(400).json({ success: false });
  return res.status(200).json({
    success: true,
    content: Bookss,
    BooksPresident: BooksPresident,
    BooksMentor: BooksMentor,
    BooksLead: BooksLead,
  });
});

router.get("/:id", async (req, res) => {
  Books.findById(req.params.id)
    .then((theBooks) => {
      if (!theBooks) {
        res
          .status(404)
          .json({ success: false, message: "the book does not exists" });
      } else {
        res.status(200).send(theBooks);
      }
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Books.findByIdAndRemove(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: `Cannot delete Data with id=${req.params.id}. Maybe Books was not found!`,
        });
      } else {
        res.send({
          message: "Books was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Books with id=" + req.params.id,
      });
    });
});

module.exports = router;
