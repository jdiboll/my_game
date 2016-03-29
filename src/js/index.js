// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';


class Player {
	constructor () {
		this.health = 100;
		this.damage = function(num) {
			var hitPoints = num || 10;
			return this.health = this.health - hitPoints;
		}
	}
};
	var goodGuy = new Player () 
	var badGuy = new Player () 


		

	
	//var bgHealth = document.querySelector('#jesusHealth');

$('button').on('click', function (){
	var num1 = _.random(2,25);
	var num2 = _.random(2,25);
	// console.log(this);
	//console.log(num);
	// this.damage(num);
	goodGuy.damage(num1);
	console.log(goodGuy.health);
	badGuy.damage(num2);
	console.log(badGuy.health);

	document.getElementById('walterHealth').innerHTML=(`
		<progress value="${goodGuy.health}" max="100"></progress>
	`);
	

	document.getElementById('jesusHealth').innerHTML=(`
		<progress value="${badGuy.health}" max="100"></progress>
	`);

	if (goodGuy.health <= 0) {
		alert("Dios Mio, man!!") && Player.health == 100;
	} else if (badGuy.health <= 0) {
		alert("Mark it Zero!!!") && Player.health == 100;
	};
		

})
	
	


// Left to MVP
// 	progress bars to respond
// 	game over
// 	restart



