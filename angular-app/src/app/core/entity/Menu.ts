export class Menu {
  id: number;
  name: string;
  description: string;
  menu_items: Array<number>;

  constructor(id:number, name:string, description: string, menu_items: Array<number>) {
    this.id = id
    this.name = name
    this.description = description
    this.menu_items = menu_items
  }
}
