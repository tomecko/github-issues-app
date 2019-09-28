export enum ItemStatus { Closed, Open }

export interface IItem {
  createdAt: Date;
  favourite: boolean;
  name: string;
  status: ItemStatus;
}
