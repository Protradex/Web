const storage = {
	set: (key, val) => {
		if (!key) return;
		if (typeof val !== 'string') {
			val = JSON.stringify(val);
		}
		localStorage.setItem(key, val);
	},
	get: (key) => {
		return JSON.parse(
			localStorage.getItem(key)
		);
	},
	getItem: (key) => {
		return localStorage.getItem(key);
	},
	remove: (key) => {
		localStorage.removeItem(key);
	},
};

export default storage;
