let input1= document.getElementById('input1');
let input2= document.getElementById('input2');
const btn= document.querySelector('#calcular');
let result= document.querySelector('#resultado');
let operar= document.querySelector('#operar');
let resultado; 
let x=operar.value;


btn.addEventListener('click', calculadora);



function calculadora (){
   

  switch(operar.value){
    case 'suma': resultado=parseFloat(input1.value)+parseFloat(input2.value);
    result.innerText='Resultado: '+resultado;
    break;

    case 'resta': resultado=parseFloat(input1.value)-parseFloat(input2.value);
    result.innerText='Resultado: '+resultado;
    break;

    case 'multiplicacion': resultado=parseFloat(input1.value)*parseFloat(input2.value);
    result.innerText='Resultado: '+resultado;
    break;

    case 'division': resultado=parseFloat(input1.value)/parseFloat(input2.value);
    result.innerText='Resultado: '+resultado;
    break;
    
  }
}
