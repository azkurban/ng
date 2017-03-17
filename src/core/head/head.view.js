import View from 'core/view/view';
import Log from 'core/infrastructure/log';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import PipeUnit from 'core/pipe/units/pipe.unit';

export default class HeadView extends View {
	constructor(model, service, tagName) {
		super(model);

		this.tagName = tagName;
		this.rows = [];

		this.drop = new Command({
			canExecute: e => {
				if (e.source && e.source.key === tagName) {
					const map = columnService.map(model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: e => {
				const view = model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						const sourceColumn = columns[sourceIndex].model;
						const targetColumn = columns[targetIndex].model;
						const indexMap = Array.from(model.columnList().index);
						indexMap.splice(sourceColumn.index, 1);
						indexMap.splice(targetColumn.index, 0, sourceColumn.key);
						model.columnList({index: indexMap});

						service.invalidate(
							'reorder', {
								target: targetIndex,
								source: sourceIndex
							},
							PipeUnit.column
						);
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				if (e.source.key === tagName) {
					const map = columnService.map(model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			}
		});

		this.resize = new Command({
			canExecute: e => {
				if (e.source.key === tagName) {
					const columns = columnService.lineView(model.view().columns).map(v => v.model);
					const map = columnService.map(columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			}
		});

		model.viewChanged.watch(() => this.invalidate(model));
	}

	transfer(cell) {
		return {
			key: this.tagName,
			value: cell.column.key
		};
	}

	invalidate(model) {
		Log.info('view.head', 'invalidate');

		const columns = model.view().columns;
		this.rows = columns;
	}
}