import { FC } from "react";
import { categoriesToDrinks } from "../../pages/drinks";
import { useAppSelector } from "../../redux/hooks";
import { Drinks } from "../../types/pizzas";
import { PizzaError } from "../PizzaError/PizzaError";
import { Skeleton } from "../Skeleton";
import { DrinksBlock } from "./DrinksBlock/DrinksBlock";

interface IDrinksPageProps{
    drinks: Drinks
}

export const DrinksPage:FC<IDrinksPageProps> = ({drinks}) => {

    const { status } = useAppSelector(store => store.drinks);
    const { categoryId } = useAppSelector(store => store.filter);

    if (drinks.length == 0 && status === 'success') return <PizzaError />

    return (
        <>
            <h2 className="content__title">{categoriesToDrinks[categoryId]}</h2>
            <div className="content__items">
                {
                    status === 'success' ? drinks
                    .map((drink) => {
                        return (
                            <DrinksBlock key={drink.id} drink={drink} />
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