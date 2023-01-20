import { FC } from "react";
import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentPage } from "../../redux/slices/filterSlices/filterSlice";

interface IPaginationProps{
    pageCount: number;
}

export const Pagination:FC<IPaginationProps> = ({pageCount}) => {

    const dispatch = useAppDispatch()

    const { currentPage } = useAppSelector(store => store.filter)

    const handleOnChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => handleOnChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            forcePage={currentPage - 1}
        />
)}
