import Image from "next/image";
import { FC } from "react";

import style from './PizzaError.module.scss';

export const PizzaError:FC = () => (
    <div className={style.PizzaError}>
        <Image width={100} height={100} src='img/icon-not-found.svg' alt="Картинка"/>
        <h1>Ничего не найдено</h1>
        <p>Пицц нет{'('}</p>
    </div>
)
