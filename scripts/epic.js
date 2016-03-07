var hunger = prompt('Are you hungry?');

if (hunger === 'yes') {
	var type = prompt('Would you like Mexican or Italian?');
}
if (hunger === 'no') {
	var when = prompt('Ok.  How many hours until you will be?');
}

if (type === 'Italian') {
	console.log('Perfect.  I\'ll make spaghetti.');
}
if (type === 'Mexican') {
	console.log('Bueno.  Queso es muy bien.');
}

if (when >= 3) {
	console.log('Have fun with that.  I\'m eating now.');
}
if (when < 3) {
	console.log('I can wait that long.  Let\'s play hopscotch until then.');
}