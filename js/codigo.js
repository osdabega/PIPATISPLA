var ppt = new Array("piedra", "papel","tijera");
var pc = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
var usr = prompt("Elije: Piedra: 0, Papel: 1, o Tijera: 2",0);

if(ppt[pc] == ppt[usr]){
	resultado = "EMPATE!!";
}else if((ppt[pc] == "piedra" && ppt[usr] == "tijera") || (ppt[pc] == "papel" && ppt[usr] == "piedra") || (ppt[pc] == "tijera" && ppt[usr] == "papel")){
	resultado = "GANA: JAVASCRIPT :("
}else if((ppt[pc] == "piedra" && ppt[usr] == "papel") || (ppt[pc] == "papel" && ppt[usr] == "tijera") || (ppt[pc] == "tijera" && ppt[usr] == "piedra")){
	resultado = "GANASTE :) !!!"
} else{
	alert("Pos pa qué te traaaaaje!!!")
}

alert("Elegiste: "+ppt[usr]+"\n"+"Javascript eligió: "+ppt[pc]+"\n"+resultado);



