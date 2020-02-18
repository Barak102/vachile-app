import { IYearsFromTo } from "./ICommonTypes";

export interface IFilterData {
    manufacturingYears: IYearsFromTo;
    marketingYears: IYearsFromTo;
    manufacturer?: string | null;
    type?: string | null;
}