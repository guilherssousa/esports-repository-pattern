import { Router } from "express";
import { teamController } from "./useCases/Team";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Esports API v1",
    status: "OK",
  });
});

router.get("/teams", (req, res) => {
  return teamController.index(req, res);
});
router.get("/teams/:id", (req, res) => {
  return teamController.list(req, res);
});
router.post("/teams", (req, res) => {
  return teamController.store(req, res);
});

export { router };
