const express = require("express");
const router = express.Router();

const {
  getManagers,
  addManager,
  updateManager,
  deleteManager,
} = require("../controller/manager_ctl");

router.get("/getmanagers", getManagers);
router.post("/addmanager", addManager);
router.put("/updatemanager/:id", updateManager);
router.delete("/deletemanager/:id", deleteManager);

module.exports = router;
