// Create an array with the days of the week
const daysOfWeek = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

// Print all days of the week
console.log("Alle dagen van de week zijn:");
console.log(daysOfWeek.join(', '));

// Print workdays
console.log("De werkdagen zijn:");
console.log(daysOfWeek.slice(0, 5).join(', '));

// Print weekend days
console.log("De weekenddagen zijn:");
console.log(daysOfWeek.slice(-2).join(', '));

// Print all days of the week in reverse order
console.log("Alle dagen van de week in omgekeerde volgorde zijn:");
console.log(daysOfWeek.reverse().join(', '));

// Reset the order of the array
daysOfWeek.reverse();

// Print workdays in reverse order
console.log("De werkdagen in omgekeerde volgorde zijn:");
console.log(daysOfWeek.slice(0, 5).reverse().join(', '));

// Print weekend days in reverse order
console.log("De weekenddagen in omgekeerde volgorde zijn:");
console.log(daysOfWeek.slice(-2).reverse().join(', '));

