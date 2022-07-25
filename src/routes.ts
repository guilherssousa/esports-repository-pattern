import { Router } from "express";
import { teamController } from "./useCases/Team";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Esports API v1",
    status: "OK",
  });
});

router.get("/teams", teamController.index);
router.get("/teams/:id", teamController.list);
router.post("/teams", teamController.store);

export { router };
