// Javascript Entry Point
import $ from 'jquery';
import choices from ',/long_walk';

class Game {
	constructor(choices) {
		this.choices = choices;
		this.paths = []
	};

	slide(next) {
		var buttons = next.paths.map(path = {
			return `<li>button data-next="${path.next}">${path.label}</button></li>`;
		})

		return `
		<h3>next.message</h3>
		<ul>buttons.join('')<ul>
		`
	}
	alltogether() {
		return this.paths.reduce((a, b) = a + b);
	}

	upNext(choiceName) {
		this.paths.push(choiceName.length);
		var choice = this.choices[choiceName];
		var choiceSlide = this.slide(next);
		$('.gamePage').html(choiceSlide);
	}
}