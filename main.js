const aplausos = document.querySelector("#som_tecla_aplausos");

function tocaSom(som){
    alert(som);
}

tocaSom("Deu trabalho, mas foi!!!");

let controle = "tocar";

if(controle == "tocar"){
    alert("Áudio pronto para tocar.");
 }else{
    alert("Áudio não está pronto.");
 }
 
 const buttons = document.querySelectorAll("button");

 let contador = 0;

 while (contador < buttons.length){
    buttons[contador].textContent = contador;
    contador = contador + 1;
 }