import {useState} from "react";
import './App.css';

function App() {
  const [visible, setVisibility] = useState(false)
  const [basketList, updateBasketList] = useState(["DVD 1", "DVD 2", "DVD 3"])
  const [costTotal, updateCost] = useState(5)
  const [itemTotal, updateItems] = useState(2)
  return (
    <div className="App">
      <div className="basket bg-red-400">
        <div>
            <h2>Basket</h2>
        </div>
        <div>
            <p>Total cost: £{costTotal}</p>
            <p>Number of items: {itemTotal}</p>
        </div>
        <div classname="hidden sm:block">
            <h4>Items in your basket:</h4>
          {basketList.map((item, index) => {
              return(
              <div key={index}>
              <p>{item}</p>
              </div>
              )}
          )}
        </div>
        <div>
            <button onClick={() => {
                setVisibility(true)
                updateBasketList([])
                updateCost(0)
                updateItems(0)
            }}>Buy</button>
            {visible && <p className="confirmation">Purchase complete</p>}
        </div>
      </div>
    </div>
  );
}

export default App;


{/*
'add to basket' button should update the following in the basket:
updateBasketList([...basketList, addItem(data.item.title)])
updateCost(costTotal + itemPrice)
updateItems(itemTotal + 1)
*/}