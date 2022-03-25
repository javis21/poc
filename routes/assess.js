

const express = require("express");
const authController = require('../controllers/assess');


const router = express.Router();

router.post('/register',authController.register)


module.exports = router ; 