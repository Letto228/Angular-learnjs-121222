export function splitByPages<T>(items: T[] | undefined | null, itemsPerPage: number): Array<T[]> {
	const pagesTotal = Math.ceil((items?.length || 0) / itemsPerPage);
	console.log(items?.length, itemsPerPage, pagesTotal);
	const pages = Array(pagesTotal)
		.fill(undefined)
		.map((_, index) => {
			const start = index * itemsPerPage;
			return items?.slice(start, start + itemsPerPage) || [];
		});

	console.log(pages);
	return pages;
}
