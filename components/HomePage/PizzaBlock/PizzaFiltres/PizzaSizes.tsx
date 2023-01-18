import { FC } from "react";

interface IPizzaSizesProps{
    sizes: number[];
    activeSize: number;
    handleToSetSize: (index: number) => void;
}

export const PizzaSizes:FC<IPizzaSizesProps> = ({sizes, activeSize, handleToSetSize}) => {

    return (
        <ul>
            {
                sizes.map((size, index) => (
                    <li onClick={() => handleToSetSize(index)} key={index} className={index === activeSize ? 'active' : ''}>{size} см.</li>
                ))
            }
		</ul>
    )
}