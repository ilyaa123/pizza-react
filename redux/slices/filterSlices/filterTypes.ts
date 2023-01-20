

export interface ISort{
    name: string;
    sortProperty: string;
}

export interface IStateFilter{
    categoryId: number;
    currentPage: number;
    sort: ISort;
}