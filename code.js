function solution(number){
  let sum = 0;
  for(let i = 1; i < number; i++){
    if(i % 3 === 0){
      sum+= i;
      console.log("\n")
      console.log("contador: " + i)
      console.log("divisivel por 3")
      console.log("modulo 3: " + i % 3)
      console.log("divisao 3: " + i / 3)
      console.log("soma: " + sum)
      
    }else if(i % 5 === 0){
      sum+= i
      console.log("\n")
      console.log("contador: " + i)
      console.log("divisivel por 5")
      console.log("divisao 5: " + i / 5)
      console.log("modulo 5: " + i % 5)
      console.log("soma: " + sum)
    }else{
      sum+=0
    }
 
}
  if(sum < 0){
    sum = 0
  }
console.log("\n")
console.log("soma final: " + sum)
return (sum);}

solution(10)