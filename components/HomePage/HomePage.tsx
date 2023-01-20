import { FC, memo } from "react";

import { useAppSelector } from "../../redux/hooks";
import { Pizzas } from "../../redux/slices/productsSlices/productsTypes";

import { categories } from "../../pages";
import { PizzaBlock } from "./PizzaBlock/PizzaBlock";
import { PizzaError } from "../PizzaError/PizzaError";
import { Skeleton } from "../Skeleton";

interface IHomeProps{
    pizzas: Pizzas
}

const HomePageNoMemo:FC<IHomeProps> = ({pizzas}) => {

    const { status } = useAppSelector(store => store.products);
    
    const { categoryId } = useAppSelector(store => store.filter);

    if (pizzas.length == 0 && status === 'success') return <PizzaError />

    return (
        <>
            <h2 className="content__title">{categories[categoryId]}</h2>
            <div className="content__items">
                {
                    status === 'success' ? pizzas
                    .map((pizza) => {
                        return (
                            <PizzaBlock 
                            key={pizza.id} 
                            pizza={pizza}
                            />
                        )
                    }) : status === 'loading' ? 
                        Array.from(Array(4).keys()).map((_, index) => <Skeleton key={index} />) 
                        : 
                        <PizzaError />
                }
            </div>
        </>
    )
}

export const HomePage = memo(HomePageNoMemo)