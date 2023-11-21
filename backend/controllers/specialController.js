const Special = require("../models/specialModel");
const mongoose = require("mongoose");

//get all specials

const getSpecials = async (req, res) => {
  const specials = await Special.find({}).sort({ createdAt: -1 });
  res.status(200).json(specials);
};

//get a single special
const getSpecial = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such special" });
  }

  const special = await Special.findById(id);
  if (!special) {
    return res.status(400).json({ error: "No such special" });
  }

  res.status(200).json(special);
};

//create a new special
const createSpecial = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const special = await Special.create({ title, load, reps });
    res.status(200).json(special);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a special
const deleteSpecial = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such special" });
  }

  const special = await Special.findOneAndDelete({ _id: id });

  if (!special) {
    return res.status(400).json({ error: "No such special" });
  }

  res.status(200).json(special);
};

//update a special
const updateSpecial = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such special" });
  }

  const special = await Special.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!special) {
    return res.status(400).json({ error: "No such special" });
  }

  res.status(200).json(special);
};

module.exports = {
  createSpecial,
  getSpecials,
  getSpecial,
  deleteSpecial,
  updateSpecial,
};
