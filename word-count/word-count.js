function countWords(string) {
  var split = string.split(',');
  
  this.frequencies = {};

  split.forEach(function(word){
  	frequencies[word.trim()] = 0;
  })
  split.forEach(function(word){
  	frequencies[word.trim()] += 1;
  })

  return frequencies
}

// one line version

string.split('').forEach(function(word) { Number.isNaN(frequencies[word]) == true ? frequencies[word] = 1 : frequencies[word] += 1;});
