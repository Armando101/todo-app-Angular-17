export interface TodoItem {
  id: number;
  name: string;
  checked: boolean;
}

export enum Filters {
  All = 'All',
  Pending = 'Pending',
  Completed = 'Completed',
}
