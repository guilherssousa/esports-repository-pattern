import crypto from "crypto";

import { slugify } from "../utils/slugify";

export class Team {
  public readonly id: string;

  public slug: string;
  public name: string;
  public acronym: string;
  public country: string;

  constructor(props: Omit<Team, "id" | "slug">, id?: String, slug?: String) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.slug) {
      this.slug = slugify(this.name);
    }
  }
}
