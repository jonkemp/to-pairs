module.exports = (obj) => {
	const keys = Object.keys(obj);
	const pairs = [];

	for (const key of keys) {
		pairs.push([key, obj[key]]);
	}

	return pairs;
};