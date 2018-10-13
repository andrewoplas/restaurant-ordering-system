export class Table {
    id: number;
    capacity: number;
    tableNumber: number;
    status: string;

    
    constructor(id: number, capacity: number, tableNumber: number, status: string) {
        this.id = id;
        this.capacity = capacity;
        this.tableNumber = tableNumber;
        this.status = status;
    }
}