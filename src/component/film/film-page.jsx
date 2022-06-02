import { Outlet, NavLink, useParams,useNavigate,useLocation} from "react-router-dom";
import { apiService } from "../../api-srvice";
import { useEffect, useState } from "react";
import style from "../navigation/navigation.module.css"

const FilmPage = () => {
    const { filmId ,params } = useParams();
    const [film, setFilm] = useState(null);
    const [err, setErr] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
   
    const serchTitle = location.state.state;
    const GoBack = () => {
        
        if (serchTitle===undefined) {
            navigate("/")
            return;
        }
        navigate(`/movies/${serchTitle}`);

    };
    
    useEffect(() => {
        apiService(`3/movie/${filmId}?`, '&language=en-US').then(res => {
            setFilm(res);
        }).catch((err) => setErr(err))    
        
    }, [filmId])
    

    return <div><button onClick={GoBack}>Go back</button>
        { film && <div>
        <h2>{film.title}</h2>
        <p>{film.popularity}</p>

        <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + film.poster_path} alt={film.id} />
        <h3>Overview</h3>
        <p>{film.overview}</p>
        { film.genres.length>0 && <div><h3>Genres</h3>
            <p>{film.genres.map(obg => obg.name)}</p></div>}
            <hr></hr>                   
            <ul>

            <li>< NavLink to={`/movies/${filmId}/cast`} state={location.state }  className={({ isActive }) => (isActive ? `${ style.activeLink }` : `${ style.linkNav }`)}>Cast</ NavLink></li>
            <li>< NavLink to={`/movies/${filmId}/reviews`} state={location.state } className={({ isActive }) => (isActive ? `${ style.activeLink }` : `${ style.linkNav }`)}>Reviews</ NavLink></li> 
                
             
            </ul>
        <hr></hr>
        <Outlet />

    </div>}</div>
}
export default FilmPage