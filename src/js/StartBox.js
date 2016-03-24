import InfoBox from './InfoBox';

export default class StartBox extends InfoBox () {
	render () {
		return `
		<div class="startMenu">
		<span>Ready To Play??</span>
		<button>Start</button>
		</div>
		`;
		};
	};