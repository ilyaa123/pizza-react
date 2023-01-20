

export interface IProduct{
    id: number;
    imageUrl: string;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
}

export interface IProductDrink{
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    count: number;
}

export interface IInitialStateCart{
    totalPrice: number;
    products: IProduct[];
    productsDrink: IProductDrink[]
}