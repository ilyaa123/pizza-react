import {  useEffect } from "react";
import { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

import { Categories } from "../components/Categories";
import { Layout } from "../components/Layout";
import { Pagination } from "../components/Pagination/Pagination";
import { Sort } from "../components/Sort";


import { HomePage } from "../components/HomePage/HomePage";


export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

interface IHomeProps{
	path: string
}

const Home:NextPage<IHomeProps> = ({path}) => {
	
	const dispatch = useAppDispatch();

	const { items: pizzas } = useAppSelector(store => store.pizzas);

	const { categoryId, currentPage, sort: { sortProperty } } = useAppSelector(store => store.filter);

	useEffect(() => {
		dispatch(fetchPizzas({
			sortBy: sortProperty.replace('-', ''),
			order: sortProperty.includes('-') ? 'asc' : 'desc',
			category: categoryId > 0 ? `${categoryId}` : '',
			currentPage,
		}))
	}, [categoryId, currentPage, sortProperty]);


  	return (
    	<Layout title="Главная" path={path}>
			<div className="content__top">
				<Categories categories={categories} />
				<Sort />
			</div>
			<HomePage pizzas={pizzas} />
			<Pagination pageCount={3} />
    	</Layout>
  	)
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
	
// 	const path = context.locale || null
// 	return { props: { path: path } }
// }

Home.getInitialProps = async (context) => {

	const path = context.pathname;
	return {
		path
	}
}

export default Home;