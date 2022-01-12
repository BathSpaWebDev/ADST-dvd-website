import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="basket">
        <div>
            <h2>Basket</h2>
        </div>
        <div>
            <p>Total cost: £0</p>
            <p>Number of items: 0</p>
        </div>
        <div>
            <p>Title</p>
            <p>Price</p>
        </div>
          {/*List of items in basket here - component with 'remove item' button*/}
        <div>
            <button>Buy</button>
            <p className="confirmation">Purchase complete</p>
        </div>
      </div>
    </div>
  );
}

export default App;
