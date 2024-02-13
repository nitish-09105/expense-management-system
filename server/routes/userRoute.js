const express = require("express");
const { loginController,registerController } = require("../controllers/userController");

// router object
const router = express.Router();

// routers
// POST // LOGIN User
router.post("/login",loginController);

//POST // REGISTER User
router.post("/register",registerController);

module.exports = router;
