import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection.factory';
import {isUndefined} from 'core/services/utility';

export default class SelectionView extends View {
	constructor(model) {
		super(model);

		this.behavior = behaviorFactory(model);

		this.toggle = new Command({
			execute: (item, state) => {
				if (isUndefined(state)) {
					state = this.behavior.state(item);
					this.behavior.select(item, state === null || state);
				}
				else {
					this.behavior.select(item, state);
				}

				model.selection({items: this.behavior.view}, {source: 'toggle'});
			}
		});

		model.viewChanged.watch(() => this.behavior = behaviorFactory(model));

		model.selectionChanged.watch(e => {
			if (e.tag.source !== 'toggle' && e.changes.hasOwnProperty('items')) {
				this.behavior.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit') ||
				e.changes.hasOwnProperty('mode')) {
				this.behavior = behaviorFactory(model);
			}
		});
	}

	state(item) {
		return this.behavior.state(item);
	}

	isIndeterminate(item) {
		return this.behavior.state(item) === null;
	}
}