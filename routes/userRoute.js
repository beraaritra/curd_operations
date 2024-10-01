const express = require('express');

const {test,create,read,update,deleteUser} = require("../controller/userController")

const router = express.Router();

router.get("/test",test);

router.post("/create",create);

router.get("/read",read);

router.put("/update/:id",update);

router.delete("/delete/:id",deleteUser);

module.exports = router; 