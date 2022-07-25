import { Team } from "../src/entities/Team";

import { InMemoryTeamsRepository } from "../src/repositories/implementations/InMemoryTeamsRepository";
import { TeamService } from "../src/service/TeamService";

describe("Teams Entity", () => {
  const sampleData = {
    name: "Team Facção Nova",
    acronym: "TSN",
    country: "TR",
  };

  it("should return a new Team entity", () => {
    const team = new Team(sampleData);

    expect(team).toBeInstanceOf(Team);
  });

  it("should retrun a correct slug", () => {
    const team = new Team(sampleData);

    expect(team.slug).toBe("team-faccao-nova");
  });

  it("should have a valid uuid", () => {
    const team = new Team(sampleData);

    expect(team.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });
});

describe("Teams Service", () => {
  const service = new TeamService(new InMemoryTeamsRepository());

  const sampleData = {
    name: "Kabum Black",
    acronym: "KBB",
    country: "BR",
  };

  it("should create a new team", async () => {
    const team = await service.create(sampleData);

    expect(team).toBeInstanceOf(Team);
  });

  it("should find a team by id", async () => {
    const foundTeam = await service.findOne("kabum-black");

    expect(foundTeam).toBeInstanceOf(Team);
  });

  it("should return at least 1 team", async () => {
    const teams = await service.findAll({});

    expect(teams.length).toBeGreaterThanOrEqual(1);
  });
});
