export class User {
    id: number;
    username: string;
    name: string;
    role: string;
  
    constructor(id: number, username: string, name: string, role: string) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.role = role;
    }
}

export enum Role {
    ADMIN = 'admin',
    CHEF = 'chef',
    STAFF = 'staff'
  }