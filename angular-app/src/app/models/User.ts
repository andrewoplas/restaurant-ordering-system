export class User {
    id: number;
    username: string;
    name: string;
    isAdmin: boolean;
  
    constructor(id: number, username: string, name: string, isAdmin: boolean) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.isAdmin = isAdmin;
    }
}