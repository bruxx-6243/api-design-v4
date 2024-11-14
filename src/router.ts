import { Router } from "express";

export const router = Router();

/**
 * Product Routes
 */
router.get("/products", (req, res) => {
  res.status(200).json({ message: "products" });
});

router.get("/products/:id", (req, res) => {});

router.post("/products", (req, res) => {});

router.put("/products/:id", (req, res) => {});
router.delete("/products/:id", (req, res) => {});

/**
 * update Routes
 */
router.get("/updates", (req, res) => {});
router.get("/updates/:id", (req, res) => {});

router.post("/updates", (req, res) => {});

router.put("/updates/:id", (req, res) => {});
router.delete("/updates/:id", (req, res) => {});

/**
 * update point Routes
 */

router.get("/update_points", (req, res) => {});
router.get("/update_points/:id", (req, res) => {});

router.post("/update_points", (req, res) => {});

router.put("/update_points/:id", (req, res) => {});
router.delete("/update_points/:id", (req, res) => {});
