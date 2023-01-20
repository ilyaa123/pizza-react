import { useState } from "react";

export const usePizzasPrice = (price: number, activeSize: number, activeType: number) => {
    
    let currentPrice = price

    if (activeSize === 1){
        currentPrice *= 1.25 
    } else if (activeSize === 2){
        currentPrice *= 1.5
    }
    
    if (activeType === 1) currentPrice *= 1.25
    
    return Math.floor(currentPrice)
}