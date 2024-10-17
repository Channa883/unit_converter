document.getElementById('convert-btn').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const unitType = document.getElementById('unit-type').value;
    let result;

    if (isNaN(inputValue)) {
        result = 'Please enter a valid number.';
    } else if (unitType === 'km') {
        result = (inputValue * 0.621371).toFixed(2) + ' miles';
    } else {
        result = (inputValue * 1.60934).toFixed(2) + ' kilometers';
    }

    document.getElementById('result').innerText = result;
});



//"Find the element in the HTML that has an ID of convert-btn*document.getElementById
//When the button is clicked, the function inside it runs.*addEventListene
//parseFloat turns that value into a number. If the input is not a number, it will be considered invalid (NaN).
//let result; is used to create a variable named result.