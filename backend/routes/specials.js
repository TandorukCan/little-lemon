const express = require("express");
const {
  createSpecial,
  getSpecials,
  getSpecial,
  deleteSpecial,
  updateSpecial,
} = require("../controllers/specialController");

const router = express.Router();

// GET all Specials
router.get("/", getSpecials);

//GET a single Special
router.get("/:id", getSpecial);

//POST a new Special
router.post("/", createSpecial);

//DELETE a Special
router.delete("/:id", deleteSpecial);

//UPDATE a Special
router.patch("/:id", updateSpecial);

module.exports = router;
