import { useParams} from "react-router-dom";
import { apiService } from "../../api-srvice";
import { useEffect, useState } from "react";
import { CastComponentCart } from "./CastComponent-Card";
import { ReviewerCard } from "./Reviewer-Card";
import uniqid from 'uniqid';

const ParamsFilm = () =>
{
    const { filmId, params } = useParams();
    const [reviewsArr, setReviewsArr] = useState(null);
    const [castArr,setCastArr]=useState(null)
    const [err, setErr] = useState(null);
    useEffect(() => {
        switch (params) {
            case "cast":
                apiService(`3/movie/${filmId}/credits?`, "&language=en-US").then(res => {
                    if (res.cast.length > 0) {
                        setCastArr(res.cast)
                        return;
                    }
                }).catch((err) => setErr(err))   
                break
            case "reviews":
                apiService(`3/movie/${filmId}/reviews?`, "&language=en-US").then(res => {
                    if (res.results.length > 0) {
                        setReviewsArr(res.results);
                        return;
                    }
                })
                break
            default:
                break;
        }

    },[filmId, params])

    return <div>
        {params === "cast" ? (castArr ? <div>{castArr.map(actor => <CastComponentCart actor={actor} key={uniqid()} />)}</div> : <p>We dont have case</p>)
            : (reviewsArr ? <div>{reviewsArr.map(reviewer => <ReviewerCard reviewer={reviewer} key={uniqid()} />)}</div> : <p>we dont have reviewes</p>)}
        
        </div>
}
export default ParamsFilm;