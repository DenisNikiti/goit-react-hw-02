import PropTypes from "prop-types";
import css from "./Options.module.css";
export default function Options({ feedbacksbuttons, onupdateFeedback }) {
  const feedbackstext = Object.getOwnPropertyNames(feedbacksbuttons);

  return (
    <div>
      {feedbackstext.map((element) => {
        return (
          <button
            className={css.button}
            key={element}
            onClick={() => {
              onupdateFeedback(element);
            }}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

Options.propTypes = {
  feedbacksbuttons: PropTypes.object.isRequired,
};
