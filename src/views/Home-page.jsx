import { apiService } from ".././api-srvice";
import { useEffect, useState } from "react";
import { SearchList } from "../component/Search-List";
const HomePage = () => {
    const [films, setFilms] = useState(null);
    const [err, seErr] = useState(null);
    
    useEffect(() => {
        
        apiService("3/trending/all/day?","").then(res => {
            setFilms(res.results);
        
        }).catch((err)=>seErr(err))
    },[])


    return <div>{films && <SearchList filmArr={films} config="movies" />}</div>
}
export default HomePage;