import PropTypes from "prop-types";

export default function Feedback({ feedbacks }) {
  const feedbacksarray = Object.entries(feedbacks);

     
    return (
        
       <div>
      {feedbacksarray.map((element) => {
          return <p key={element[0]}>{element[0]} : {element[1] }</p>;
      })}
    </div>
 
 
    )
        
}




Feedback.propTypes = {
  feedbacks: PropTypes.object.isRequired,
};
