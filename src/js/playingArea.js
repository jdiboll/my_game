import {Game_Width, Game_Height} from './gameParams';

	export default class playingArea {
		render () {
			return `
			<div
			style:=width: ${Game_Width}px; height: ${Game_Height}px;
			class="game">

			</div>
			`;
		}

	}