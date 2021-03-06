import {View} from '../view/view';
import {Command} from '../command/command';
import {Model} from '../infrastructure/model';
import {Table} from '../dom/table';

export declare class HighlightView extends View {
  constructor(model: Model, table: Table, setTimeout: any);

  column: Command;
  row: Command;
}
