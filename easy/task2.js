const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`write any word: `, word => {
  if(word.substr(word.length-3,3) == "ing"){
    console.log(`${word}ly`);
  }else{
    console.log(`${word}ing`);
  }
  readline.close();
});