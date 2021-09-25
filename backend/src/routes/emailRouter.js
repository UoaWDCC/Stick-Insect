import express from "express";
import Email from "../models/email";

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
    email: "testemail@wdcc.co.nz",
  });
  testEmail
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

export default router;
