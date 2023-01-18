import { FC, useCallback, useState } from "react";

enum typeNames{
    'тонкое',
    'традиционное'
}

interface IPizzaTypesProps{
    types: number[];
    handleToSetType: (index: number) => void;
    activeType: number;
}

export const PizzaTypes:FC<IPizzaTypesProps> = ({types, activeType,  handleToSetType}) => {

    return (
        <ul>
            {
                types.map(type => (
                    <li onClick={() => handleToSetType(type)} key={type} className={type === activeType ? 'active' : ''}>{typeNames[type]}</li>
                ))
            }
		</ul>
    )
}