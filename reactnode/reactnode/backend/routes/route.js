const express = require("express")
const route  = express.Router()
const ctl = require("../controllers/ctl")

route.post("/register",ctl.register)



module.exports  = route