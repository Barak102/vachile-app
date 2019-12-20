import { ICar } from "src/types/ICar";

export class CarData {
  static cars: ICar[] = [
    {
      id: 1,
      manufacturer: "Volvo",
      model: "240",
      type: "private",
      year: 1984,
      color: "brown",
      gear: "auto",
      engineVolume: 2000,
      marketingYears: {
        from: 1975,
        to: 1993
      },
      image: "assets/volvo240.jpg"
    },
    {
      id: 2,
      manufacturer: "Fiat",
      model: "1500 Cabriolet",
      type: "private",
      year: 1966,
      color: "red",
      gear: "manual",
      engineVolume: 1500,
      marketingYears: {
        from: 1959,
        to: 1966
      },
      image: "assets/fiat500cabriolet.jpg"
    }
  ];

  public static getCars = (): ICar[] => {
    return this.cars;
  };
}
