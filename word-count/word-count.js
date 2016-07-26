// Expects comma-separated list of strings
function splitString(string, separator) {
	const splitted = string.split(separator);

	const trimmed = splitted.map(function(word) { return word.trim(); });

	return trimmed;
}

// Expects array of strings
function scan(split) {
	frequencies = {};
	split.forEach(function(word) {
		frequencies[word] = 0;
	})
	split.forEach(function(word) {
		frequencies[word] += 1;
	})
	return frequencies;
}

// Chain like (scan(splitString("foo, bar, baz, foo")));