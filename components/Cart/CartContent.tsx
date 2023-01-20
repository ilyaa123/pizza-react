import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearDrinks, clearProducts } from "../../redux/slices/cartSlices/cartSlice";

import { CartDrinkItem } from "./CartDrinkItem";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";

export const CartContent:FC = () => {

    const dispatch = useAppDispatch()

    const { products, productsDrink, totalPrice } = useAppSelector(store => store.cart);

	const handleOnClickClear = () => {
		dispatch(clearProducts());
		dispatch(clearDrinks());
	}

    return (
		<div className="container--cart">
		{	products.length === 0 && productsDrink.length === 0 ? <CartEmpty /> :
			<div className="cart">
				<div className="cart__top">
					<h2 className="content__title">Корзина</h2>
					<div onClick={handleOnClickClear} className="cart__clear">
						<Image loading="lazy" width={20} height={20} src="img/trash.svg" alt="Очистка корзины"/>
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className="content__items">
					{
						products.map((product, index) => {
							return (
								<CartItem key={index} product={product} />
							)
						})
					}
					{
						productsDrink.map((drink, index) => {
							return (
								<CartDrinkItem key={index} drink={drink} />
							)
						})
					}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span> Всего товаров: <b>{
							products.reduce((sum, obj) => (sum + obj.count), 0) + productsDrink.reduce((sum, obj) => (sum + obj.count), 0)
						} шт.</b> </span>
						<span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
					</div>
					<div className="cart__bottom-buttons">
						<Link href="/" className="button button--outline button--add go-back-btn">
							<Image loading="lazy" width={8} height={14} src="img/grey-arrow-left.svg" alt="Вернутся назад" />
							<span>Вернуться назад</span>
						</Link>
						<div className="button pay-btn">
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		}
		</div>
    )
}