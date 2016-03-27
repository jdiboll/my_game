var the_choice = {
	message: 'A beautiful girl you have admired for a long time asks you if you would like to get a drink together.',
	paths: [
	{label: 'Take her up on it. What could go wrong?', next: 'many_drinks'},
	{label: 'Politely refuse. She is trouble and you know it', next: 'lone_wolf'},
]
};

var many_drinks ={
	message: 'I spend many drinks and many hours together. I find a connection with her that you have not felt in a long time. She smiles at you with her eyes',
	paths: [
	{label: 'walk her home', next: 'kiss_n_tell'},
	{label: 'walk yourself home', next: 'nice_night'};
	]

};
var lone_wolf = {
	message: 'Sitting quietly, you enjoy your drink, judging yourself for choosing the safe path and not taking a chance. Who knows what could have been?';
	paths: [
	{label: ''

	}]
}
export default {
	the_choice;
	many_drinks,
	lone_wolf
};