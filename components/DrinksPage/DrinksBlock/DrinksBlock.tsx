import { FC } from "react";

import Image, { ImageLoader } from "next/image";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { addDrink } from "../../../redux/slices/cartSlices/cartSlice";
import { Drink } from "../../../redux/slices/productsSlices/productsTypes";
import { imageLoader } from "../../../utils/imageLoader";


interface IDrinksBlockProps{
    drink: Drink;
}

export const DrinksBlock:FC<IDrinksBlockProps> = ({drink}) => {

    const dispatch = useAppDispatch()

    const {id, title, price, imageUrl } = drink;

    const countProduct = useAppSelector(store => store.cart.productsDrink.filter(obj => obj.id === id))

    const handleToAdd = () => {
        const product = {
            id,
            title,
            price,
            imageUrl,
            count: 1
        }
        dispatch(addDrink(product))
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
			<div className="pizza-block__bottom">
				<div className="pizza-block__price"> {price} ₽</div>
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