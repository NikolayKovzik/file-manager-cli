export const sortByField = (arr, field, sortType = 'ASC') => {
	switch (sortType) {
		case 'ASC':
			return arr.sort((a, b) => a[field] > b[field] ? 1 : -1);
		case 'DESC':
			return arr.sort((a, b) => b[field] > a[field] ? 1 : -1);
	}
};