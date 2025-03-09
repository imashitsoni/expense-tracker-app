import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const expDay = props.date.toLocaleString('en-US', {day: '2-digit'});
    const expMonth = props.date.toLocaleString('en-US', {month: 'long'});
    const expYear = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__day">{expDay}</div>
            <div className="expense-date__month">{expMonth}</div>
            <div className="expense-date__year">{expYear}</div>
        </div>
    )
}

export default ExpenseDate;