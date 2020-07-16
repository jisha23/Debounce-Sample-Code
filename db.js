const debounce = (fun, delay) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => fun(...args), delay);
	};
};

const display = (c, n) => {
	console.log(c, n);
};

const debouncedDisplay = debounce(display, 0);

debouncedDisplay("a", 1);
debouncedDisplay("b", 2);
debouncedDisplay("c", 3);
debouncedDisplay("d", 4);
