export interface IDateRangeProps {
    title: string;
    name: string;
    minimumYear: number;
    maximumYear: number;
    minTitle: string;
    maxTitle: string;
    YearChanged: any;
    defaultMinValue?: number;
    defaultMaxValue?: number;
    includeEmptyValue: boolean;
}