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
     console.log(res);
    
}