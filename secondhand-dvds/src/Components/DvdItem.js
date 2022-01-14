import { EachDvd } from "./EachDvd"
import DvdMovies from "../movies.json"

// const DvdMovies =[
//   {
//     "id": 1,
//     "movie": "Trekkies 2",
//     "genre": [
//       "Documentary",
//       "Sci-Fi"
//     ],
//     "year": 2007,
//     "price": "£5.49",
//     "bluray": true,
//     "stock": 16
//   },
//   {
//     "id": 2,
//     "movie": "Billy Jack Goes to Washington",
//     "genre": [
//       "Drama"
//     ],
//     "year": 1999,
//     "price": "£5.10",
//     "bluray": false,
//     "stock": 1
//   },
//   {
//     "id": 3,
//     "movie": "Batman",
//     "genre": [
//       "Action",
//       "Crime",
//       "Thriller"
//     ],
//     "year": 1987,
//     "price": "£8.32",
//     "bluray": true,
//     "stock": 13
//   }]
export const DvdItems =()=>{
  const DvdList = DvdMovies.map(movie =>
  <EachDvd
  movie={movie}/>
  )
  
    return <div>
      
        {DvdList}
      
     
</div>
}