alert("validar tarjeta");


console.log(reverse(validarTarjeta));
var tarjeta=parseInt(prompt("¿cual es el numero de tarjeta?"));
if(tarjeta%2==0){
  alert(true);
}else{
  alert(false);
}

var reverse =function(array){
for(i=0;i<=tarjeta.length;i++){
  var newArray= array.pop();
  array.splice(i,0,newArray);

}
return array;

}

console.log(reverse(tarjeta));
console.log(newArray);
