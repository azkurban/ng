import Directive from '@grid/view/directives/directive';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TH_CORE_NAME,} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';

class ThCore extends Directive(TH_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.$attrs = $attrs;
	}

	onInit() {
		const column = this.column;
		const element = this.element;

		this.view.table.head.cellBucket.set(this, this.rowIndex, this.columnIndex);
		element.classList.add(`${GRID_PREFIX}-${column.key}`);
		element.classList.add(`${GRID_PREFIX}-${column.type}`);
		if (column.hasOwnProperty('editor')) {
			element.classList.add(`${GRID_PREFIX}-${column.editor}`);
		}

		if (this.$attrs[TH_CORE_NAME] !== 'body') {
			const model = this.view.model;
			const cache = model.head().cache;
			let link = cache.find(column.key);
			if (!link) {
				const build = cellBuilder(this.view.template);
				link = build('head', model, this.column);
				cache.set(column.key, link);
			}

			link(this.$element, this.$scope);
		}
	}

	get column() {
		return this.$scope.$column.model;
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}

	get columnIndex() {
		return this.$scope.$index;
	}

	get element() {
		return this.$element[0];
	}

	onDestroy() {
		this.view.table.head.cellBucket.remove(this, this.rowIndex, this.columnIndex);
	}
}

ThCore.$inject = [
	'$scope',
	'$element',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
};