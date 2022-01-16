import { EachDvd } from "./EachDvd"
import DvdMovies from "../movies.json"
import { GenreFilter } from "./GenreFilter";
import React,{useState }from 'react'


// const DvdMovies =[
//   {
//     "id": 1,

//     "bluray": true,o
//     "stock": 13
//   }]
export const DvdItems =(props)=>{
  const [pickedGenre,setGenre] = useState("Drama")


  const GenreFilterHandler=(selectedGenre)=>{
    setGenre(selectedGenre)
    console.log(pickedGenre)
  }
   const filterdMovies = DvdMovies.filter(dvd=>{
    console.log(dvd.genre)
  //   return dvd.genre.forEach((g)=>{
  //  g === pickedGenre
  for(let i = 0; i < dvd.genre.length; i++)
  {
     return dvd.genre[i] === pickedGenre
    
  }
  
  })



  const DvdList = filterdMovies.map(movie =>
  <EachDvd
  movie={movie}/>
  )

    return <div className="">
      <div>
        <GenreFilter selected={pickedGenre} onGenreChange={GenreFilterHandler}/>
      </div>

        {DvdList}  
</div>
} 