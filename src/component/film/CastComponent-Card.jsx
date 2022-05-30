import PropTypes from "prop-types";
export const CastComponentCart = ({ actor }) => {
    const { name, profile_path } = actor;
    return <div><img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`} />
        <h2>{name}</h2>
    </div>
}
CastComponentCart.propTypes = {
  actor: PropTypes.object.isRequired
};