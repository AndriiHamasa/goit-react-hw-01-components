import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
};

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
