import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

interface ICategoriesProps{
    categories: string[];
}

export const Categories:FC<ICategoriesProps> = ({categories}) => {

    useEffect(() => {
        dispatch(setCategoryId(0))
    }, [])

    const { categoryId } = useAppSelector(store => store.filter)
    
    const dispatch = useAppDispatch()

    const handleOnclick = (index: number) => {
        dispatch(setCategoryId(index));
        dispatch(setCurrentPage(1))
    }

    return (
        <div className="categories">
			<ul>
                {categories.map((category, index) => (<li key={index} onClick={() => handleOnclick(index)} className={categoryId === index ? 'active' : ''}>{category}</li>))}
			</ul>
		</div>
    )
}