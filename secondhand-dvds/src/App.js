import {Basket} from "./components/Basket";
import './App.css';

function App() {
  return (
      <Basket />
  )
}

export default App;


{/*
'add to basket' button should do the following:
<button onClick={() => {
    updateBasketList([...basketList, addItem(data.item.title)])
    updateCost(costTotal + itemPrice)
    updateItems(itemTotal + 1)
    }
}
ALSO UPDATE STOCK NUMBER ON THAT COMPONENT?
*/}