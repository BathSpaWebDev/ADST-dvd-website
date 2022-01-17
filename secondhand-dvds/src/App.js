import React, {useState} from 'react'
import { DvdItems } from "./Components/DvdItem";
import { Headers } from './Components/Headers';

function App() {
  
  return (
    <div className="text-xl bg-slate-200 font-normal text-black min-h-screen  items-center p-10 gap-y-10">
      <div className={`text-4xl flex-row bg-cyan-200 h-24 text-white text-center pt-5`}
	style={{
	    backgroundImage: `url(https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488669_1280.jpg)`,
        }}>  
      <h1>Second hand DVDs</h1>
      </div>
      <section className= "text-2xl bg-cyan-200 font-normal text-black items-center">
        

        <div className="bg-cyan-200 sm:p-5 ">
        <Headers/>
<DvdItems />
        </div>
      </section>
    </div>
  )
}

export default App;