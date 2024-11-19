import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getUpdateById,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

export const router = Router();

/**
 * Product Routes
 */
router.get("/product", getProducts);

router.get("/product/:id", getProductById);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);

router.delete("/product/:id", deleteProduct);

/**
 * update Routes
 */
router.get("/updates", getUpdates);
router.get("/updates/:id", getUpdateById);

router.post(
  "/updates",
  body("body").exists().isString(),
  body("title").exists().isString(),
  body("product_id").exists().isString(),
  createUpdate
);

router.put(
  "/updates/:id",
  body("body").optional(),
  body("title").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  updateUpdate
);
router.delete("/updates/:id", deleteUpdate);

/**
 * update point Routes
 */

router.get("/update_points", (req, res) => {});
router.get("/update_points/:id", (req, res) => {});

router.post("/update_points", (req, res) => {});

router.put("/update_points/:id", (req, res) => {});
router.delete("/update_points/:id", (req, res) => {});
