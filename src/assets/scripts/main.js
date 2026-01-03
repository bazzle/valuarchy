import {BackTop, BackTopVisibility} from './BackTop.js';
import {initBlinkWidget} from './BlinkInit.js';


document.addEventListener("DOMContentLoaded", function(){
	BackTop();
	BackTopVisibility();
	initBlinkWidget();
});
