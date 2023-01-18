import { FC } from "react";
import Image from 'next/image';

import style from './NotFound.module.scss';
import { useRouter } from "next/router";

export const NotFound:FC = () => {
    const router = useRouter();
    const handleOnClick = () => {
        router.back();
    }
    return(
        <div className={style.NotFound}>
            <Image width={120} height={120} src='img/icon-not-found.svg' alt="Картинка"/>
            <h1>Ничего не найдено</h1>
            <p>Данная страница отсутвствует в нашем магазине</p>
            <button onClick={handleOnClick}>Вернуться назад</button>
        </div>
    )
}