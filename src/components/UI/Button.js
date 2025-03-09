const Button = () => {
    const buttonValue = 'Button';
    function alert (ele) {
        console.log('Hello ', ele);
    }
    return(
        <button className="btn" onClick={() => alert('You clicked me!')} >{buttonValue}</button>
    )
} 

export default Button;