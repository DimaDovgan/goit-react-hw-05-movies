import style from "./serch-film/serch-film.module.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SearchList = ({ filmArr, config, serchTitle }) => {
    return <div>
        <ul className={style.ul}>
            {filmArr.map(film => {
                return <Link to={`${config}/${(film.id).toString()}`} state={ {state:serchTitle} } key={film.id} className={style.li} >{film.title}</Link>
            
        })}
            </ul>
    </div>
}

SearchList.propTypes = {
    filmArr: PropTypes.array.isRequired,
    config: PropTypes.string.isRequired,
    serchTitle:PropTypes.string,
};