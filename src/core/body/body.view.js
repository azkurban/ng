import View from 'core/view/view';
import * as columnService from 'core/column/column.service';
import Aggregation from 'core/services/aggregation';
import AppError from 'core/infrastructure/error';
import Log from 'core/infrastructure/log';
import Node from 'core/node/node';
import {getFactory as valueFactory} from 'core/services/value';
import {getFactory as labelFactory} from 'core/services/label';

export default class BodyView extends View {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.columns = [];
		this._valueFactory = valueFactory;
		this._labelFactory = labelFactory;

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		Log.info('view.body', 'invalidate');

		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.table.body.removeLayer('blank');
		this.rows = model.view().rows;
		if (!this.rows.length) {
			const laterState = model.layer();
			if (laterState.resource.data.hasOwnProperty('blank')) {
				const layer = this.table.body.addLayer('blank');
				layer.resource('blank', laterState.resource);
			}
		}
	}

	invalidateColumns(model) {
		const columns = model.view().columns;
		this.columns = columnService.lineView(columns);
	}

	valueFactory(column) {
		const model = this.model;
		const getValue = this._valueFactory(column);

		return row => {
			if (row instanceof Node) {
				const node = row;
				const rows = model.data().rows;
				switch (node.type) {
					case 'group': {
						const aggregation = column.aggregation;
						if (aggregation) {
							if (!Aggregation.hasOwnProperty(aggregation)) {
								throw new AppError(
									'view.body',
									`Aggregation ${aggregation} is not registered`);
							}

							const groupRows = node.rows.map(i => rows[i]);
							return Aggregation[aggregation](groupRows, getValue, column.aggregationOptions);
						}

						return null;
					}
					case 'row': {
						const rowIndex = node.rows[0];
						return getValue(rows[rowIndex], column);
					}
					default:
						throw new AppError(
							'view.body',
							`Invalid node type ${node.type}`
						);
				}
			}

			return getValue(row);
		};
	}

	labelFactory(column) {
		const getLabel = this._labelFactory(column);
		return row => getLabel(row);
	}

	value(row, column) {
		const getValue = this.valueFactory(column);
		return getValue(row);
	}

	label(row, column) {
		const getLabel = this.labelFactory(column);
		return getLabel(row);
	}
}