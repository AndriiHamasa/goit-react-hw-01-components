import PropTypes from "prop-types";
import css from './Stat.module.css'

export const Stat = ({label, percentage, color}) => {
  return (
    <li className={css.item} style={{backgroundColor: `${color}`}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{ percentage}%</span>
    </li>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}


