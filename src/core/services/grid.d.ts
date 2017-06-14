import {Model} from "../infrastructure/model";

export interface IPipe{
	(memo: any, context: any, next: (memo: any) => void);
}

export class GridService {

	constructor(model: Model, apply: () => void);

	invalidate(source: string, changes: object, pipe: IPipe[]): Promise<any>;

	busy(): any;
}