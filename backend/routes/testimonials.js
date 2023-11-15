const express = require("express");
const {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  deleteTestimonial,
  updateTestimonial,
} = require("../controllers/testimonialController");

const router = express.Router();

// GET all testimonials
router.get("/", getTestimonials);

//GET a single testimonial
router.get("/:id", getTestimonial);

//POST a new testimonial
router.post("/", createTestimonial);

//DELETE a testimonial
router.delete("/:id", deleteTestimonial);

//UPDATE a testimonial
router.patch("/:id", updateTestimonial);

module.exports = router;
