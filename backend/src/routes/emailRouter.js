import express from "express";
// eslint-disable-next-line import/extensions
import Email from "../models/email.js";

const router = express.Router();

router.get("/", (req, res) => {
  Email.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

router.post("/", (req, res) => {
  const testEmail = new Email({
    email: req.body.email,
  });
  testEmail
    .save()
    .then((result) => {
      res.send(req.body);
    })
    .catch((err) => {
      console.error(err);
    });
});

export default router;
