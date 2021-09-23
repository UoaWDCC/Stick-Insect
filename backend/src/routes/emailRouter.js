import express from "express";

const router = express.Router();
const Email = require("../models/email");

router.get("/", (req, res) => {
  Email.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const testEmail = new Email({
    email: "testemail@wdcc.co.nz",
  });
  testEmail
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
});

export default router;
