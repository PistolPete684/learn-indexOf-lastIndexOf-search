function firstToLast(str,c){
  // set the first index and last index as a variable
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);
  
  // if no match indicated by -1 return -1
  if (firstIndex === -1) {
    return -1;
    // otherwise return the difference between the first and last index
  } else {
      return lastIndex - firstIndex;
    }
}

// alternative code wars solution
// function firstToLast(str,c){
//   var first = str.indexOf(c), last = str.lastIndexOf(c);
//   return first == -1 ? -1 : last - first;
// }