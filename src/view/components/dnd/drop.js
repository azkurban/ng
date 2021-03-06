import Directive from '@grid/view/directives/directive';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import DragService from './drag.service';
import {DROP_NAME, CAN_DROP_NAME, DROP_EFFECT_NAME, ON_DROP_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';

class Drop extends Directive(DROP_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.listener = new EventListener(this.element, new EventManager(this));
	}

	onInit() {
		this.element.classList.add(`${GRID_PREFIX}-can-drop`);
		this.using(this.listener.on('dragenter', this.enter));
		this.using(this.listener.on('dragover', this.over));
		this.using(this.listener.on('dragleave', this.leave));
		this.using(this.listener.on('drop', this.drop));
	}

	onDestroy() {
		super.onDestroy();

		this.element.classList.remove(`${GRID_PREFIX}-can-drop`);
	}

	drop(e) {
		e.stopPropagation();

		this.element.classList.remove(`${GRID_PREFIX}-dragover`);
		const event = this.event(e.dataTransfer)
		if (this.canDrop(event)) {
			this.$scope.$evalAsync(() => this.onDrop(event));
		}

		return false;
	}

	enter(e) {
		e.preventDefault();

		this.element.classList.add(`${GRID_PREFIX}-dragover`);
		e.dataTransfer.dropEffect = this.effect || 'move';
		return false;
	}

	over(e) {
		e.preventDefault();

		let effect = this.effect || 'move';
		if(this.element.classList.contains(`${GRID_PREFIX}-drag`) ||
				this.canDrop(this.event()) === false){
			effect = 'none';
		}

		e.dataTransfer.dropEffect = effect;
		return false;
	}

	leave() {
		this.element.classList.remove(`${GRID_PREFIX}-dragover`);
	}

	event(e) {
		const target = this.transfer();
		const source = arguments.length
			? DragService.decode(e.getData(DragService.mimeType))
			: DragService.transfer;

		return {
			$event: {
				source: source,
				target: target
			}
		};
	}
}

Drop.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {
		'transfer': `&${DROP_NAME}`,
		'onDrop': `&${ON_DROP_NAME}`,
		'canDrop': `&${CAN_DROP_NAME}`,
		'effect': `@${DROP_EFFECT_NAME}`
	},
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};