import { EachDvd } from "./EachDvd"
import DvdMovies from "../movies.json"


// const DvdMovies =[
//   {
//     "id": 1,

//     "bluray": true,
//     "stock": 13
//   }]
export const DvdItems =(props)=>{
  const DvdList = DvdMovies.map(movie =>
  <EachDvd
  movie={movie}/>
  )

    return <div className="">

        {DvdList}  
</div>
} 