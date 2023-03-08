const Controllers = require('../Controllers/UserController')

const express = require('express')
const router=express.Router()


// User
router.post("/api/user/register", Controllers.userRegisterController);
router.post("/api/user/login", Controllers.userLoginController);
router.get("/api/user/allusers", Controllers.userAllController);
router.post("/api/user/updateuser/:id", Controllers.userUpdateController);
router.post("/api/user/deleteuser/:id", Controllers.userDeleteController);
router.get("/api/user/getoneuser/:id", Controllers.userOneController);


router.get("/api/user/useractivity", Controllers.userActivityAllController);
router.post("/api/user/downloadactivity", Controllers.DownloadActivity);
router.get("/api/user/downloadactivity", Controllers.GetDownloadActivity);


module.exports=router