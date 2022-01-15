import { DvdItems } from "./Components/DvdItem";
import {Headers} from "./Components/Headers"


function App() {
  
  return (
    <div className="text-xl bg-slate-200 font-normal text-black min-h-screen  items-center p-10 gap-y-10">
      <div className="text-4xl flex-row bg-cyan-200 h-24  text-center pt-5 ">
      <h1>Second hand DVDs</h1>
      </div>
      <section className= "text-2xl bg-cyan-200 font-normal text-black items-center">
        

        <div className="bg-red-100 ">
        <div className ="grid grid-cols-6 gap-1 p-5 m-5"><h3>Title</h3>
      <h3>Year</h3>
      <h3>Price</h3>
      <h3>In Stock</h3>
      <h3>Genre</h3>
      </div>
<DvdItems />
        </div>
      </section>
    </div>
  )
}

export default App;
