const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);   
   readline.question('Enter your age :', age => {
    if(age < 16){
        console.log(`“You’re not allowed to drive in Iowa`)
    }else{
        console.log(`“You’re allowed to get a drivers license in Iowa`)
    }
    readline.close();
   });
});
const getTheNum = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
let sum = 0;

function getNumber(){
       getTheNum.question('Enter number here: ', num => {  
        if (num === "stop"){
            getTheNum.close();
            console.log(sum);
        }else{
            sum += parseInt(num);
            return getNumber();
        }
        
       });
      
    }getNumber();

    