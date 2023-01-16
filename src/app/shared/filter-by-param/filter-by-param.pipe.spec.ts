import { FilterByParamPipe } from './filter-by-param.pipe';

describe('FilterByParamPipe', () => {
	const pipe = new FilterByParamPipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});
});
