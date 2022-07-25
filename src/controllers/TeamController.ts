import { Request, Response } from "express";
import { TeamService } from "../service/TeamService";

export class TeamController {
  constructor(private teamService: TeamService) {}

  async handle(req: Request, res: Response) {
    const { name, country, acronym } = req.body;

    try {
      await this.teamService.create({
        name,
        acronym,
        country,
      });
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }
}
