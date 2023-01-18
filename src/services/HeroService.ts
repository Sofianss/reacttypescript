import SuperHero from "../models/SuperHero";

export default class HeroService {
  public static async getAllHeros(): Promise<SuperHero[]> {
    return fetch("http://localhost:3004/superHeros/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async getHerosById(id: number): Promise<SuperHero> {
    return fetch(`http://localhost:3004/superHeros/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.isEmpty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  public static async updateHero(hero: SuperHero): Promise<SuperHero> {
    return fetch(`http://localhost:3004/superHeros/${hero.id}`, {
      method: "PUT",
      body: JSON.stringify(hero),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  private static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  private static error(error: Error): void {
    console.log(error);
  }
}
