const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/authControllers");
const validate = require("../middlewares/authMiddleware");
const signup = require("../validators/validation");

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);
module.exports = router;
