document.getElementById('myButton').addEventListener('click', function() {
    let message = "Hello, world!";
    console.log(message);
});

function calculateSum(a, b) {
    return parseInt(a) + parseInt(b);
//  return +a + +b;
}

var result = calculateSum(5, "10");
console.log(result);
