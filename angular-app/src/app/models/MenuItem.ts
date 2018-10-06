export class MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    cookingTime: number;
    servings: number;
    show: boolean;
    menuId: number;
    imageURL: string;
    //ingredients: Array<string>;
    constructor() {
      this.id = 0;
      this.name = "Test";
      this.description = "Test";
      this.price = 0;
      this.salePrice = 0;
      this.cookingTime = 0;
      this.servings = 0;
      this.menuId = 0;
      this.imageURL =  "Test";;
      this.show = true;
    }

    /*constructor(id:number, name:string, description: string, price: number, salePrice: number, cookingTime: number, servings: number, menuId: number, imageURL: string, show:boolean) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.salePrice = salePrice;
      this.cookingTime = cookingTime;
      this.servings = servings;
      this.menuId = menuId;
      this.imageURL = imageURL;
      this.show = show;
    }*/
  }
  