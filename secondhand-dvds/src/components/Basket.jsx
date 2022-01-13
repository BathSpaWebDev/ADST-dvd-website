import {useState} from "react";
export const Basket = ({movieTitle, price}) => {
    const [visible, setVisibility] = useState(false)
    const [basketList, updateBasketList] = useState(["DVD 1", "DVD 2", "DVD 3"])
    const [costTotal, updateCost] = useState(12)
    const [itemTotal, updateItems] = useState(3)
    return (
            <div className="App">


                <button className="top-left w-1/3 border-2 border-indigo-900 rounded p-4 text-2xl
        font-bold bg-indigo-200 hover:border-indigo-500 m-6" onClick={() => {
                    updateBasketList([...basketList, "Midsommar"])
                    updateCost(costTotal + 5.55)
                    updateItems(itemTotal + 1)
                }}>Add to basket</button>



                <div className="text-left w-1/3 bg-indigo-300 p-4 rounded border-2 border-indigo-900 m-auto">
                    <div className="p-4">
                        <p className="text-5xl">Basket</p>
                    </div>
                    <div className="bg-indigo-100 p-4 border-2 border-indigo-900 rounded m-2">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Total cost:</p>
                            <p>£{costTotal}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Number of items:</p>
                            <p>{itemTotal}</p>
                        </div>
                    </div>
                    <div className="bg-indigo-100 p-4 border-2 border-indigo-900 rounded m-2 hidden sm:block">
                        <p className="font-semibold">Items in your basket:</p>
                        {basketList.map((item, index) => {
                            return(
                                <div key={index} className="flex justify-between">
                                      <p>{item}</p>
                                      <button onClick={() => {
                                          (basketList.splice(index, 1))
                                          updateBasketList([...basketList])

                                      }}>Remove</button>
                                </div>
                            )}
                        )}
                    </div>
                    <div className="flex items-center justify-between m-2">
                        <button className="border-2 border-indigo-900 rounded p-4 text-2xl font-bold bg-indigo-200 hover:border-indigo-500" onClick={() => {
                            setVisibility(true)
                            updateBasketList([])
                            updateCost(0)
                            updateItems(0)
                        }}>Buy</button>
                        {visible && <p className="text-xl font-bold text-indigo-700">Purchase complete!</p>}
                    </div>
                </div>
            </div>
        );
    }