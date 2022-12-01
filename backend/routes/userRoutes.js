const express = require('express');
const {home, createUser, getUser, editUser, deleteUser} = require("../controller/userController")
const router = express.Router()

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;