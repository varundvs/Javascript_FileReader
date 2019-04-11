class ProcessData {
	
	constructor() {    
		this.words = [];
		this.wordsCount = {};
	}
	
	process(data) {
		var tokens = data.split(/\W+/);
		// For every token
		for (var i = 0; i < tokens.length; i++) {
		  // Lowercase everything to ignore case
		  var token = tokens[i].toLowerCase();
		  if (this.validate(token)) {
			// Increase the count for the token
			this.increment(token);
		  }
		}
	}

	// A function to validate a toke
	validate(token) {
		return /\w{2,}/.test(token);
	}
	
	increment(word) {
		// Is this a new word?
		if (!this.wordsCount[word]) {
			this.wordsCount[word] = 1;
			this.words.push(word);
			// Otherwise just increment its count
		} else {
			this.wordsCount[word]++;
		}
	}
	
	// An array of words
	getWords() {
		return this.words;
	  }

	  // Get the count for a word
	getCount(word) {
		return this.wordsCount[word];
	}
	  
	getMeaning(text){
		
		const url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-ru&text='+text;		
		var req = new XMLHttpRequest();
		req.overrideMimeType("application/json");
		req.open('GET', url, true);
		req.onload  = function() {
		   var jsonResponse = JSON.parse(req.responseText);
		   
		};
		req.send(null);
	}
	
	sortByCount() {
		var details = this;	
        this.words.sort(function(a, b){return details.getCount(b) - details.getCount(a)});
	}
}