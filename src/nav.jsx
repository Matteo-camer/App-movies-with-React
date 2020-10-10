import React, {useContext} from "react"
import "./nav.css"
import {MovieContext} from "./movieContext"

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="navigation">
            <h3>Joel Yvan, </h3>
            <p>List of movies: {movies.length}</p>
        </div>
    )
}

export default Nav;