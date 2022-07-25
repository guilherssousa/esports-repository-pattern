import { ITeamsRepository } from "../ITeamsRepository";
import { Team } from "../../entities/Team";

export class InMemoryTeamsRepository implements ITeamsRepository {
  private state: Team[] = [
    {
      acronym: "TL",
      name: "Team Liquid",
      id: "1",
      country: "US",
      slug: "team-liquid",
    },
  ];

  async create(team: Team): Promise<Team> {
    this.state.push(team);
    return team;
  }

  async findAll(data: Partial<Omit<Team, "id">>): Promise<Team[]> {
    const teams = this.state.filter((team) => {
      return Object.keys(data).every((key) => {
        return team[key] === data[key];
      });
    });

    return teams;
  }

  async findOne(idOrSlug: string): Promise<Team> {
    const sanitizedIdOrSlug = idOrSlug.toLowerCase().trim();
    const team = this.state.find(
      (team) => team.id === sanitizedIdOrSlug || team.slug === sanitizedIdOrSlug
    );

    return team;
  }
}
