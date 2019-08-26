// types.ts

export interface SortableField {
  key: string;
  order: string;
}

export interface RangeParameter {
  key: string;
  operators: Array<string>;
}


export interface QueryState {
  term: string;
  groupbyPlacename: boolean;

  sortFields: Array<SortableField>;

  range: RangeParameter;

  depFilter: String[];

  minTermLength: number;
}
