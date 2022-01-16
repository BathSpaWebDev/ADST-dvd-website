import React, {useState} from 'react'
import { DvdItems } from "./Components/DvdItem";
import { GenreFilter } from "./Components/GenreFilter";
import { Headers } from './Components/Headers';

function App() {
  const [pickedGenre,setGenre] = useState("Drama")


  const GenreFilterHandler=(selectedGenre)=>{
    setGenre(selectedGenre)
  }
  const filterdMovies = props
  
  return (
    <div className="text-xl bg-slate-200 font-normal text-black min-h-screen  items-center p-10 gap-y-10">
      <div className="text-4xl flex-row bg-cyan-200 h-24  text-center pt-5 ">
      <h1>Second hand DVDs</h1>
      </div>
      <div>
        <GenreFilter selected={pickedGenre} onGenreChange={GenreFilterHandler}/>
      </div>
      <section className= "text-2xl bg-cyan-200 font-normal text-black items-center">
        

        <div className="bg-red-100 sm:p-5 ">
        <Headers/>
<DvdItems />
        </div>
      </section>
    </div>
  )
}

export default App;