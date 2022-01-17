export const EachDvd = (props)=>{

    return <div className="bg-white  p-5 border-2 border-indigo-600 grid md:grid-cols-6 gap-1 m-5 style= backgound-image:url('https://pixabay.com/photos/rose-blossom-bloom-macro-flower-6928126/')">
        <h3>{props.movie.movie}</h3>
        <p>{props.movie.year}</p>
        <p>{props.movie.price}</p>
        <p>{props.movie.stock}</p>
        <p>{props.movie.genre.join(" | ")}</p>
        <button className="rounded px-2 py-2  bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Add to Basket</button>
    </div>
}