import { FC } from "react";

import Link from "next/link";

export const CartEmpty:FC = () => {

    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="img/empty-cart.png" alt="Пустая корзина" />
            <Link href="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
        </div>
    )
}