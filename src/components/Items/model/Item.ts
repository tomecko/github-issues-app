export enum ItemStatus { Closed, Open }

export interface IItem {
  createdAt: Date;
  favourite: boolean;
  id: number;
  name: string;
  status: ItemStatus;
}
