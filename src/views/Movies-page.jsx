import { SerchFilm } from "../component/serch-film/Serch-film"
import { useState, useEffect } from "react"
import { apiService } from "../api-srvice"
import {useParams,useLocation} from "react-router-dom";
import { SearchList } from "../component/Search-List";

const MoviesPage = () => {

    const [filmArr, setFilmArr] = useState([]);
    const [error, setError] = useState(null);
    let { id } = useParams();
    let {search} = useLocation();
    
    useEffect(() => {
        let serchTitle=search.slice(1)
        let serchString = "&"+serchTitle;
        if(serchTitle==="")return
        apiService("3/search/movie?",serchString).then(res => {
            setFilmArr(res.results);
        
        }).catch((err)=>setError(err))
    },[search])

    return <div><SerchFilm />
        {filmArr.length > 0 && <SearchList filmArr={filmArr} config={"/movies"}/>}
        
    </div>
}
export default MoviesPage;