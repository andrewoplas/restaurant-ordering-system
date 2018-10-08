export class MenuItem {
    id?: number;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    cookingTime: number;
    servings: number;
    show: boolean;
    menuId: number;
    imageLink: string;
    ingredients: Array<string>;

    constructor(id:number, name:string, description: string, price: number, salePrice: number, cookingTime: number, servings: number, menuId: number, imageLink: string, show:boolean, ingredients:Array<string>) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.salePrice = salePrice;
      this.cookingTime = cookingTime;
      this.servings = servings;
      this.menuId = menuId;
      this.imageLink = imageLink;
      this.show = show;
      this.ingredients = ingredients
    }
  }
  