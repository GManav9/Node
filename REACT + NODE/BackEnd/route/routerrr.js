const expres = require("express");
const route = expres.Router();
const ctl = require("../controller/ctl");

route.post("/addData", ctl.addData);
route.get("/viewData",ctl.viewData)
route.delete("/deleteData", ctl.deleteData);
route.put("/updateData", ctl.updateData);

module.exports = route;
