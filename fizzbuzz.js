let num1 = prompt("Enter number 1")
let num2 = prompt("Enter number 2")
for(let i =num1;i<=num2;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}