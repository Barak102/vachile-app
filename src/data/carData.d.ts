import { ICar } from "src/types/ICar";

export class CarData {
  static cars: ICar[] = [
    {
      id: 1,
      manufacturer: "volvo",
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
      manufacturer: "volvo",
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
      id: 3,
      manufacturer: "volvo",
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
    }
  ];

  public static getCars = (): ICar[] => {
    return this.cars;
  };
}
