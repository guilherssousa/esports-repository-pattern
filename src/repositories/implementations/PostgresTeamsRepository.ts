import { ITeamsRepository } from "../ITeamsRepository";
import { Team } from "../../entities/Team";

export class PostgresTeamsRepository implements ITeamsRepository {
  private state: Team[] = [];

  async create(team: Team): Promise<void> {
    this.state.push(team);
  }

  async findAll(data: Partial<Omit<Team, "id">>): Promise<Team[]> {
    const teams = this.state.filter((team) => {
      return Object.keys(data).every((key) => {
        return team[key] === data[key];
      });
    });

    return teams;
  }

  async findOne(id: string): Promise<Team> {
    const team = this.state.find((team) => team.id === id);

    return team;
  }
}
