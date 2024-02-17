import PropTypes from "prop-types";
import css from "./Options.module.css";
export default function Options({ onUpdateFeedback, resetFeedback }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onUpdateFeedback("good");
        }}
        className={css.button}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdateFeedback("neutral");
        }}
        className={css.button}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdateFeedback("bad");
        }}
        className={css.button}
      >
        bad
      </button>

      <button type="button" className={css.button} onClick={resetFeedback}>
        Reset
      </button>
    </div>
  );
}

Options.propTypes = {
  onUpdateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};
