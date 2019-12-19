import { IYearsFromTo } from "./ICommonTypes";

export interface ICar {
  id: number;
  manufacturer: string;
  model: string;
  type: string;
  year: number;
  color: string;
  gear: string;
  engineVolume: number;
  marketingYears: IYearsFromTo;
  image: string;
}
