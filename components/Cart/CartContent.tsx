import Link from "next/link";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearDrinks } from "../../redux/slices/cartDrinkSlice";
import { clearProducts } from "../../redux/slices/cartSlice";
import { CartDrinkItem } from "./CartDrinkItem";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";


export const CartContent:FC = () => {

    const dispatch = useAppDispatch()

    const { products, totalPrice } = useAppSelector(store => store.cart);
	const { productsDrink, totalPriceDrink } = useAppSelector(store => store.cartDrink)

	const handleOnClickClear = () => {
		dispatch(clearProducts());
		dispatch(clearDrinks());
	}

    return (
		<div className="container--cart">
		{	products.length === 0 ? <CartEmpty /> :
			<div className="cart">
				<div className="cart__top">
					<h2 className="content__title"> <img src="img/cart.svg" alt="Корзина" /> Корзина</h2>
					<div onClick={handleOnClickClear} className="cart__clear">
						<img src="img/trash.svg" alt="Очитска корзины" />
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
						<span> Сумма заказа: <b>{totalPrice + totalPriceDrink} ₽</b> </span>
					</div>
					<div className="cart__bottom-buttons">
						<Link href="/" className="button button--outline button--add go-back-btn">
							<img src="img/grey-arrow-left.svg" alt="Вернутся назад" />
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