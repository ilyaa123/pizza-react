import { Html } from "next/document";
import Head from "next/head";
import React, { FC } from "react";
import { Header } from "./Header";

interface Layout{
    title: string;
    path: string;
    description?: string;
    children?: React.ReactNode
}

export const Layout:FC<Layout> = ({title = 'Pizza-React', path, description = 'Pizza width react, next, redux', children }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="wrapper">
                <Header path={path} />
                <div className="content">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
            
        </>
    )
}