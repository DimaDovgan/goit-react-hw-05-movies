import PropTypes from "prop-types";
export const ReviewerCard = ({ reviewer }) => {
    return <div><h2>Author:{reviewer.author_details.username}</h2>
        <p>{ reviewer.content}</p>
        </div>
}



ReviewerCard.propTypes = {
  reviewer: PropTypes.object.isRequired
};