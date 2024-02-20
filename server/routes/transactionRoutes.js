const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");

// router object
const router = express.Router();

// routes
// add transaction POST
router.post("/add-transaction", addTransaction);

// get transaction GET
router.post("/get-transaction", getAllTransaction);

module.exports = router;
