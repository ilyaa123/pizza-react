export type Pizza = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export type FetchParams = {
    sortBy: string,
	order: string,
	category: string,
    currentPage: number,
}

export type Drink = {
    id: number,
    title: string,
    imageUrl: string,
    price: number,
    category: number,
    rating: number
}

export type Pizzas = Array<Pizza>
export type Drinks = Array<Drink>