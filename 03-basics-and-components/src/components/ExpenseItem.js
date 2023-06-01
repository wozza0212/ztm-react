import "./ExpenseItem.css";

const ExpenseItem = () => {

    const expenseDate = new Date(2008, 2, 18);
    const expenseTitle = 'Car Insurance';
    const expenseCost = 288.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-itdm__description'>
        <h2>{expenseTitle}</h2>

        <div className='expense-item__price'>{expenseCost}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
