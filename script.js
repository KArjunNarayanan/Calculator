let expression = ''; // variable to store expression
function appendToDisplay(value) { // Function to append value for display
    expression += value;
    document.getElementById('display').value = expression;
}
function squareRoot(value) { // for finding square root of an nunber
    try {
        const result = eval(expression);
        if (isNaN(result)) {
            throw new Error("Invalid Input");
        }
        const squaredResult = result * result;
        document.getElementById('display').value = squaredResult;
        expression = ''; // Reseting the expression
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}
function calculate() { // Function to calculate final resutl and to display in textField
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}