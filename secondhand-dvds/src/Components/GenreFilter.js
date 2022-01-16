import { DvdItems } from "./DvdItem"
import DvdMovies from "../movies.json"

export const GenreFilter= (props)=>{
    const filterChangeHandler =(event)=>{
        console.log(event.target.value)

    }
    return <div className="">
        <label>Genre</label>
        <select onChange={filterChangeHandler}>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Thriller">Thriller</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Comedy">Comedy</option>
            <option value="Musical">Musical</option>
            <option value="Romance">Romance</option>
            <option value="War">War</option>
            <option value="Horror">Horror</option>
            <option value="Animation">Animation</option>
            <option value="IMAX">IMAX</option>
            <option value="Children">Children</option>
            <option value="Western">Western</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Mystery">Mystery</option>
        </select>
</div>

}