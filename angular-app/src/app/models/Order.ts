import { MenuItem } from "@models/MenuItem";

export class Order {
  id: number;
  amount: number;
  status: string;
  tableId: number;
  orderNumber: number;
  menuItem: Array<MenuItemQuantity>;
  dateCreated: Date;

  constructor(id: number, amount: number, status: string, tableId: number, orderNumber: number, menuItem: Array<MenuItemQuantity>, dateCreated: Date) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.tableId = tableId;
    this.orderNumber = orderNumber;
    this.menuItem = menuItem;
    this.dateCreated = dateCreated;
  }
}

export interface MenuItemQuantity {
  item: MenuItem,
  price: number,
  onSale: boolean,
  quantity: number,
  id?: number
}

export enum Status {
  PAID = 'paid',
  PENDING = 'pending',
  CANCELLED = 'cancelled'
}