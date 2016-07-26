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