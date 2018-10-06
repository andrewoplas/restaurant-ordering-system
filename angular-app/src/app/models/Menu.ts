export class Menu {
  id: number;
  name: string;
  description: string;
  // menu_items: Array<number>;
  show: boolean;

  constructor(id:number, name:string, description: string, show:boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    // this.menu_items = menu_items;
    this.show = show;
  }
}
