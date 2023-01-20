import Image from "next/image";
import { FC, useCallback, useMemo, useState } from "react";
import { usePizzasPrice } from "../../../hooks/usePizzasPrice";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addProduct } from "../../../redux/slices/cartSlices/cartSlice";
import { imageLoader } from "../../../utils/imageLoader";

import { PizzaSizes } from "./PizzaFiltres/PizzaSizes";
import { PizzaTypes } from "./PizzaFiltres/PizzaTypes";

enum typeNames{
    'тонкое',
    'традиционное'
}

type PizzaBlockProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    category: number;
    rating: number;
}
interface IPizzaBlock {
    pizza: PizzaBlockProps;
}

export const PizzaBlock:FC<IPizzaBlock> = ({pizza}) => {
    const {id, title, price, imageUrl, sizes, types} = pizza;

    const countProduct = useAppSelector(store => store.cart.products.filter(obj => obj.id === id))

    const dispatch = useAppDispatch()

    const [ activeType, setActiveType] = useState(types[0]);
    const [ activeSize, setActiveSize] = useState(0);

    const currentPrice = useMemo(() => {
        let currentPrice = price

        if (activeSize === 1){
            currentPrice *= 1.25 
        } else if (activeSize === 2){
            currentPrice *= 1.5
        }
        
        if (activeType === 1) currentPrice *= 1.25
        
        return Math.floor(currentPrice)
    }, [activeSize, activeType, price])

    const handleToSetType = useCallback((index: number) => {
        setActiveType(index)
    }, [])

    const handleToSetSize = useCallback((index: number) => {
        setActiveSize(index)
    }, [])

    const handleToAdd = () => {
        const product = {
            id,
            title,
            price: currentPrice,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 1
        }
        dispatch(addProduct(product))
    }

    return (
        <div className="pizza-block">
			<Image
                width={260}
                height={260}
                loader={imageLoader}
                loading="eager"
                unoptimized
				className="pizza-block__image"
				src={imageUrl}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
                <PizzaTypes types={types} activeType={activeType} handleToSetType={handleToSetType} />
                <PizzaSizes sizes={sizes} activeSize={activeSize} handleToSetSize={handleToSetSize} />
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {currentPrice} ₽</div>
				<div onClick={handleToAdd} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
					    />
				    </svg>
			        <span>Добавить</span>
			        <i>{countProduct?.reduce((sum, product) => (sum + product.count), 0) || 0}</i>
				</div>
			</div>
		</div>
    )
}