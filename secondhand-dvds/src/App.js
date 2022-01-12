import {useState} from "react";
import './App.css';

function App() {
  const [visible, setVisibility] = useState(false)
  const [basketList, updateBasketList] = useState(["item 1", "item 2", "item 3"])
  const [costTotal, updateCost] = useState(5)
  const [itemTotal, updateItems] = useState(2)
  return (
    <div className="App">
      <div className="basket">
        <div>
            <h2>Basket</h2>
        </div>
        <div>
            <p>Total cost: £{costTotal}</p>
            <p>Number of items: {itemTotal}</p>
        </div>
        <div>
            <p>Title</p>
            <p>Price</p>
        </div>
          {/*List of items in basket here - component with 'remove item' button*/}
        <div>
            <button onClick={() => {
                setVisibility(true)
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
updateBasketList([...basketList, addItem])*/}