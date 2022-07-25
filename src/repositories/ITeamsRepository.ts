import { Team } from "../entities/Team";

export interface ITeamsRepository {
  findOne(id: string): Promise<Team>;
  findAll(data: Partial<Omit<Team, "id">>): Promise<Team[]>;
  create(team: Team): Promise<void>;
}
