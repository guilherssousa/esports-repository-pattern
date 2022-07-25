import { Router } from "express";
import { teamController } from "./useCases/Team";

const router = Router();

router.post("/players", (req, res) => teamController.handle);

export { router };
