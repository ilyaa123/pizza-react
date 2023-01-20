import { NextPage } from "next"
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchDrinks } from "../redux/slices/productsSlices/asyncThunk";

import { Categories } from "../components/Categories";
import { DrinksPage } from "../components/DrinksPage/DrinksPage";
import { Layout } from "../components/Layout"
import { Pagination } from "../components/Pagination/Pagination";
import { Sort } from "../components/Sort";


export const categoriesToDrinks = ["Все", "Напитки", "Чаи", "Соки", "Морс", "Вода", "Кофе"];

interface IDrinksProps{
    path: string;
}

const Drinks:NextPage<IDrinksProps> = ({path}) => {

    const dispatch = useAppDispatch();

	const { drinks } = useAppSelector(store => store.products)

	const { categoryId, currentPage, sort: { sortProperty } } = useAppSelector(store => store.filter);

	useEffect(() => {
		dispatch(fetchDrinks({
			sortBy: sortProperty.replace('-', ''),
			order: sortProperty.includes('-') ? 'asc' : 'desc',
			category: categoryId > 0 ? `${categoryId}` : '',
			currentPage,
		}))
	}, [categoryId, currentPage, sortProperty, dispatch]);

    return (
        <Layout title="Напитки" path="drinks">
            <div className="content__top">
				<Categories categories={categoriesToDrinks} />
			    <Sort />
			</div>
			<DrinksPage drinks={drinks} />
            <Pagination pageCount={3} />
        </Layout>
    )
}

Drinks.getInitialProps = async (context) => {

    const path = context.pathname
    return {
        path: path
    }
}

export default Drinks