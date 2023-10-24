function displayMailingLabel(name, address, city, state, zip) {
    console.log(name)
    console.log(address)
    console.log(city + ", " + state + ", " + zip)
}

function addNumbers(number1, number2) {
    const someNumber = number1 + number2;
    console.log(`${number1} + ${number2} = ${someNumber}`);
}

function displayReceipt(totalDue, amountPaid) {
    const changeDue = amountPaid - totalDue;
    console.log(`Total Due: ${totalDue}`)
    console.log(`Amount Paid: ${amountPaid}`)

    console.log(`Change Due: ${changeDue}`)
}

displayMailingLabel("James Coe ", "1564 street " , "Phoenix ", "Arizona ", "85015");
displayMailingLabel("John Coral ", "5689 street ", "Phoenix ", "Arizona ", "85001 ");

addNumbers(2, 5);
addNumbers(3, 4);

displayReceipt(400, 300)
displayReceipt(250, 250)
displayReceipt(100, 200)
