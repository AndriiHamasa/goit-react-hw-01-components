import PropTypes from 'prop-types';
import css from './Transaction.module.css'

export const Transaction = ({ type, amount, currency, index }) => {
  return (
    <tr className={(index + 1) % 2 === 0 ? css.tableRow : ''}>
      <td className={css.tableCell}>{type}</td>
      <td className={css.tableCell}>{amount}</td>
      <td className={css.tableCell}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
