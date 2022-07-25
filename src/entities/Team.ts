import crypto from "crypto";

export class Team {
  public readonly id: string;

  public slug: string;
  public name: string;
  public acronym: string;
  public country: string;

  constructor(props: Omit<Team, "id">, id?: String) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
