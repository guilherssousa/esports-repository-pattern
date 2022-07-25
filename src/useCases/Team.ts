import { InMemoryTeamsRepository } from "../repositories/implementations/InMemoryTeamsRepository";
import { TeamService } from "../service/TeamService";
import { TeamController } from "../controllers/TeamController";

const postgresTeamsRepository = new InMemoryTeamsRepository();

const teamService = new TeamService(postgresTeamsRepository);

const teamController = new TeamController(teamService);

export { teamService, teamController };
