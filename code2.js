function filter_list() {
   
  sup = []
  for(let i in l){
    if(typeof(l[i]) == 'number'){
      sup.push(l[i])
    }
    
  }
  // Return a new array with the strings filtered out
  return sup;
}

console.log(filter_list())