import { ITeamsRepository } from "../repositories/ITeamsRepository";
import { Team } from "../entities/Team";
import { ICreateTeamRequestDTO } from "../dtos/TeamsDTO";

export class TeamService {
  constructor(private teamRepository: ITeamsRepository) {}

  async create(data: ICreateTeamRequestDTO) {
    const slug = data.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const teamAlreadyExists = await this.teamRepository.findOne(slug);

    if (teamAlreadyExists) {
      throw new Error("Team already exists.");
    }

    const team = new Team({ ...data, slug });

    await this.teamRepository.create(team);
  }
}
