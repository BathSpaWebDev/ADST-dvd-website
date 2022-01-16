import React, {useState} from 'react'
import { DvdItems } from "./Components/DvdItem";
import { GenreFilter } from "./Components/GenreFilter";


function App() {
  const [pickedGenre,setGenre] = useState("Drama")


  const GenreFilterHandler=(selectedGenre)=>{
    setGenre(selectedGenre)
  }
  
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
        <div className =" grid grid-cols-6 gap-1 p-5 m-5 ">
          
          <h3 className="hidden md:block">Title</h3>
      <h3 className="hidden md:block">Year</h3>
      <h3 className="hidden md:block">Price</h3>
      <h3 className="hidden md:block">In Stock</h3>
      <h3 className="hidden md:block">Genre</h3>
      </div>
<DvdItems />
        </div>
      </section>
    </div>
  )
}

export default App;