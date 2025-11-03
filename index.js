const text= "Abima Hamphery Zawadi";
const Excel=document.getElementById("Excel");

let index=0;

function type(){
    if(index<text.length){
        document.getElementById("Abima").innerHTML+=text.charAt(index);
        index++;
    }else{
        clearInterval(typingInterval);
    }
    
}
const typingInterval=setInterval(type, 100);

























 // types one letter every 300ms








// start animation
/*myFunction=(a,b)=>a*b;
let x=myFunction(5,6);
console.log(x)







function declaration

function functionName(parameters) {
  // code to be executed
}

let x= myFunction(4,3);
console.log(x);
function myFunction(a,b){
    return a*b;
}
























/*const min=1;
const max=2;
const Answer=Math.floor( Math.random()*(max-min+1)+min );

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt('guess a number btwn ${min}-${max}');
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess<min ||guess>max){
        window.alert("please enter a valid number");
    }
    else{
        attempt++;
        if(guess<Answer){
             window.alert("TOO LOW TRY AGAIN");
        } 
        else if(guess>Answer){
             window.alert("TOO HIGH TRY AGAIN");
        else{
            window.alert("CORRECT the answer was ${Answer}. It took you${attempt}attempts");
            running=false;
        }

    }
}






























/*let length=document.getElementById("L");
let width=document.getElementById("W");
let area;

length=window.prompt('enter the length');
width=window.prompt('enter the width');

area=length*width;*/

/*let lenth;
let width;
let area;

lenth=window.prompt("enter your preferable lenth");
width=window.prompt("enter your preferable width");

area=2*width*lenth;

console.log(area);*/





/*const PI=3.14;
let radius;
let circumference;


radius=window.prompt(`enter the radius of the cicle`);


circumference=2*PI*radius;

console.log(circumference);*/
