const buttonContainer=document.querySelector("#button-container");
const display=document.querySelector("#display");
const button=document.querySelectorAll('button');
const operator=document.querySelectorAll("#left-operators button")
const numbers=document.querySelectorAll(".numbers button")

let num1=null,num2=null;
let oper=null;
let res=null;


numbers.forEach((num)=>{
    num.addEventListener("click",(e)=>{
        
        if(num1==undefined){num1=num.textContent;
        console.log(`num1=${num1}`);}
       else {num2=num.textContent;
       console.log(`num2=${num2}`)}
});
})
operator.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        oper=op.textContent;
        console.log(oper);
    })
})
button.forEach((button)=>{
button.addEventListener("click",(e)=>display.textContent=e.target.textContent);
})

const equals=document.querySelector("#equals")
equals.addEventListener("click",()=>{
    console.log(num1,num2,oper);
    operate(num1,num2,oper)});


function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
  
}

function multiply(num1,num2){
    return num1*num2
    
}

function divide(num1,num2){
    num1/num2;
}

function operate(num1,num2,operator){
    num1=Number(num1)
    num2=Number(num2)
    
    
    if(operator=="+"){
       res= add(num1,num2)
    }
    if(operator=="-"){
       res= subtract(num1,num2)
    }
    if(operator=="*"){
       res= multiply(num1,num2)
    }
    if(operator=="/"){
        res=divide(num1,num2)
    }

    display.textContent=res;

  

}