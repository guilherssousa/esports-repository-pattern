import { Player } from "../entities/Player";

export interface ICreateTeamRequestDTO {
  name: string;
  country: string;
  acronym: string;
}

export type IListTeamsRequestDTO = Partial<Omit<Player, "id">>;
