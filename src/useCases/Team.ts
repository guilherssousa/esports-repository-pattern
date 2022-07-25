import { PostgresTeamsRepository } from "../repositories/implementations/PostgresTeamsRepository";
import { TeamService } from "../service/TeamService";
import { TeamController } from "../controllers/TeamController";

const postgresTeamsRepository = new PostgresTeamsRepository();

const teamService = new TeamService(postgresTeamsRepository);

const teamController = new TeamController(teamService);

export { teamService, teamController };
