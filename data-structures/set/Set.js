function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.contains = contains;
	// this.size = size;
	this.union = union;
	this.intersect = intersect;
	// this.subset = subset;
	// this.difference = difference;
	// this.show = show;
}

function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}

function remove(data) {
	var position = this.dataStore.indexOf(data);
	if (position > -1) {
		this.dataStore.splice(position, 1);
		return true;
	} else {
		return false;
	}
}

function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}

function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; i ++) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}