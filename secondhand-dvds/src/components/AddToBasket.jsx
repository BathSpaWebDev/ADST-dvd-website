import {useState} from "react";
export const AddToBasket = ({moviePrice}) => {
    const [basketList, updateBasketList] = useState(["DVD 1", "DVD 2", "DVD 3"])
    const [costTotal, updateCost] = useState(12.50)
    const [itemTotal, updateItems] = useState(3)
    return (
        <button className="border-2 border-indigo-900 rounded p-4 text-2xl
        font-bold bg-indigo-200 hover:border-indigo-500" onClick={() => {
            updateBasketList([...basketList, "Midsommar"])
            updateCost(costTotal + {moviePrice})
            updateItems(itemTotal + 1)
        }}>Add to basket</button>
    )
}

{/*
DO I NEED THIS COMPONENT TO BE SEPARATE TO BASKET>?
ALSO UPDATE STOCK NUMBER?
*/}
