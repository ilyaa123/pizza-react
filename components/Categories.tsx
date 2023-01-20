import { FC, useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlices/filterSlice";

interface ICategoriesProps{
    categories: string[];
}

export const Categories:FC<ICategoriesProps> = ({categories}) => {

    const { categoryId } = useAppSelector(store => store.filter)
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCategoryId(0))
    }, [dispatch])

    const handleOnclick = useCallback((index: number) => {
        dispatch(setCategoryId(index));
        dispatch(setCurrentPage(1))
    }, [dispatch])

    return (
        <div className="categories">
			<ul>
                {categories.map((category, index) => (<li key={index} onClick={() => handleOnclick(index)} className={categoryId === index ? 'active' : ''}>{category}</li>))}
			</ul>
		</div>
    )
}