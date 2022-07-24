let arr = [
  {
    "id": 1,
    "name": "Jacek",
    "notes": [5, 3, 4, 2, 5, 5]
  },
  {
    "id": 2,
    "name": "Ewa",
    "notes": [2, 3, 3, 3, 2, 5]
  },
  {
    "id": 3,
    "name": "Zygmunt",
    "notes": [2, 2, 4, 4, 3, 3]
  }
]

function getTopNotes(arr){
  let result=[];
  for(let x of arr){
    let max = Math.max(...x.notes);
    result.push(max);
  }
  return result;
}

console.log(getTopNotes(arr));