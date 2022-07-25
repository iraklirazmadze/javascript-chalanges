function formatDate(date){
  let splitedDate = date.split("/");
  let result = splitedDate.join("");
return result;
}

console.log(formatDate("01/15/2019") );