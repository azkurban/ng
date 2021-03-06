Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {

	this.model = qgrid.model();
	this.selection = [];
	this.rows = [];

	this.selectionChanged = (e) => {
		this.selection = e.state.items;
	};

	this.selectionKey = {
		row: row => `row ${this.rows.indexOf(row)}`,
		column: column => column.key,
	};

	this.model.dataChanged.watch((e) => {
		if (e.hasChanges('columns')) {
			if (e.state.columns.length > 0 && e.state.rows.length > 0) {
				const gender = e.state.columns.find(c => c.key === 'gender');

				// Default selection
				this.model.selection({
					items: e.state.rows.slice(2, 4).map(row => {
						return {
							row: this.selectionKey.row(row),
							column: this.selectionKey.column(gender)
						};
					})
				});
			}
		}
	});

	$http.get('data/people/100.json')
		.then((response) => {
			this.rows = response.data;
		});
}