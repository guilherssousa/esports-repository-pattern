import { Request, Response } from "express";
import { TeamService } from "../service/TeamService";

export class TeamController {
  constructor(private teamService: TeamService) {}

  async store(req: Request, res: Response) {
    console.log(`[TeamController] Creating team`);
    const { name, country, acronym } = req.body;

    try {
      return res.json(
        await this.teamService.create({
          name,
          acronym,
          country,
        })
      );
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }

  async index(req: Request, res: Response) {
    console.log(`[TeamController] Listing teams`);
    try {
      const teams = await this.teamService.findAll(req.body);

      return res.json(teams);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }

  async list(req: Request, res: Response) {
    console.log(`[TeamController] Showing team`);
    try {
      const { id } = req.params;

      const team = await this.teamService.findOne(id);

      return res.json(team);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }
}
