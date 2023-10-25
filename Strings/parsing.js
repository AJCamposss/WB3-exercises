

function parseAndDisplayName (fullName) {

let index = name.indexOf(" "); 

let full = name.substring(0,12);
console.log ("Name: " + full);

firstname = name.substring(0, index);
console.log("First Name: " + full);

lastname = name.substring(index + 1);
console.log("Last Name: " + full);
}

let name = "James Wilson";
parseAndDisplayName(fullName)