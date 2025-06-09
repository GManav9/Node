const Manager = require("../model/manager_schema");

// Get all managers
module.exports.getManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching managers", error });
  }
};

// Add a new manager
module.exports.addManager = async (req, res) => {
  try {
    const { name, email, image } = req.body; // image bhi lo
    const newManager = new Manager({ name, email, image });
    await newManager.save();
    res
      .status(201)
      .json({ msg: "Manager added successfully", manager: newManager });
  } catch (error) {
    res.status(500).json({ msg: "Error adding manager", error });
  }
};

// Update a manager
module.exports.updateManager = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedManager = await Manager.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ msg: "Manager updated successfully", manager: updatedManager });
  } catch (error) {
    res.status(500).json({ msg: "Error updating manager", error });
  }
};

// Delete a manager
module.exports.deleteManager = async (req, res) => {
  try {
    const { id } = req.params;
    await Manager.findByIdAndDelete(id);
    res.status(200).json({ msg: "Manager deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting manager", error });
  }
};
