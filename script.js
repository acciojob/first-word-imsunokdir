function firstWord(s) {
  // your code here
	s = s.trim();
	if(s.length === 0){
		return ""
	}
	let indexOfFirstSpace = s.indexOf(" ");
	if(indexOfFirstSpace === -1){
		return s;
	}
	return s.substr(0, indexOfFirstSpace)
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
