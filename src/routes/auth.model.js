const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register",authController.userRegisterController);
router.get("/login", authController.userLoginController);



module.exports = router