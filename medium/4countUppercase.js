function countUppercase(str) {
	let count=0
	for(let arrs of str) {
    for(let letters of arrs){
      if(letters == letters.toUpperCase()){
        count +=1;
      }
    }
	}
	return count;
}

console.log(countUppercase(["asSFGGSe","asdgG"]));