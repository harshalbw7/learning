export interface Student {

    name: string;
    email: string;
    password: string;
    status: string;
    
}

export interface Cart {
    cartId: number;
    customerId: number;
    foodId: number;
}

export interface Food {
    foodId: number;
    foodName: string;
    foodPrice: number;
}