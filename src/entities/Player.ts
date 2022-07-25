import crypto from "crypto";

export class Player {
  public readonly id: string;

  public slug: string;
  public name: string;
  public full_name: string;
  public country: string;
  public age?: number;

  constructor(props: Omit<Player, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}
