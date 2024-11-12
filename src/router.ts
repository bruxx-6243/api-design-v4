import { Router } from "express";

const router = Router();

/**
 * Product Routes
 */
router.get("/products", (req: Request, res: Response) => {});
router.get("/products/:id", (req: Request, res: Response) => {});

router.post("/products", (req: Request, res: Response) => {});

router.put("/products/:id", (req: Request, res: Response) => {});
router.delete("/products/:id", (req: Request, res: Response) => {});

/**
 * update Routes
 */
router.get("/updates", (req: Request, res: Response) => {});
router.get("/updates/:id", (req: Request, res: Response) => {});

router.post("/updates", (req: Request, res: Response) => {});

router.put("/updates/:id", (req: Request, res: Response) => {});
router.delete("/updates/:id", (req: Request, res: Response) => {});

/**
 * update point Routes
 */

router.get("/update_points", (req: Request, res: Response) => {});
router.get("/update_points/:id", (req: Request, res: Response) => {});

router.post("/update_points", (req: Request, res: Response) => {});

router.put("/update_points/:id", (req: Request, res: Response) => {});
router.delete("/update_points/:id", (req: Request, res: Response) => {});
