export enum ItemStatus { Open, Closed }

export interface IItem {
  createdAt: Date;
  favourite: boolean;
  name: string;
  status: ItemStatus;
}
