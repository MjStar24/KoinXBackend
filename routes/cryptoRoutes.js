import { Router } from "express";
import cryptoController from "../controllers/cryptoController.js";

const router=Router();
router.get("/stats",cryptoController.getStats);
router.get("/deviation",cryptoController.getDeviation);


export default router;