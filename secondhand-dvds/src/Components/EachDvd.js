
export const EachDvd = (props)=>{
    return <div>
        <h3>{props.movie.movie}</h3>
        <p>{props.movie.year}</p>
        <p>{props.movie.price}</p>
        <p>{props.movie.stock}</p>
        <p>{props.movie.genre.join(" | ")}</p>
    </div>

}