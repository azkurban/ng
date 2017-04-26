import View from '../view/view';
import log from 'core/infrastructure/log';

export default class ScrollView extends View {
	constructor(model, table, vscroll, service, apply) {
		super(model);

		this.table = table;

		const scroll = model.scroll;

		this.y = vscroll({
			threshold: model.pagination().size,
			rowHeight: model.row().height
		});

		this.y.container.apply = f => {
			apply(() => {
				f();
				const container = this.y.container;
				this.model.pagination({
					current: Math.floor(container.position / model.pagination().size),
					count: container.total
				}, {
					source: 'scroll.view',
					behavior: 'core'
				});
			});
		};

		switch (scroll().mode) {
			case 'virtual': {
				// model.viewChanged.watch(() => {
				// 	this.y.container.reset();
				// });

				this.y.settings.fetch = (skip, take, d) => {
					this.model.pagination({
						current: Math.floor(skip / take)
					}, {
						source: 'scroll.view',
						behavior: 'core'
					});

					service.invalidate('scroll.view')
						.then(d.resolve(model.view().rows.length));
				};

				break;
			}
			default:
				model.paginationChanged.watch(() => {
					this.y.container.reset();
				});
		}


		model.scrollChanged.watch(e => {
			if (e.hasChanges('left')) {
				this.invalidate();
			}
		});
	}

	invalidate() {
		log.info('layout', 'invalidate scroll');

		const table = this.table;
		const scroll = this.model.scroll();
		table.head.scrollLeft(scroll.left);
		table.foot.scrollLeft(scroll.left);
	}

	get mode() {
		return this.model.scroll().mode;
	}
}