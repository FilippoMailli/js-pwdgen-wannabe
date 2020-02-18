var nome = prompt("Qual è il tuo nome?");
var cognome = prompt("Qual è il tuo cognome?");
var colore = prompt("Qual è il tuo colore preferito?");
var data = new Date();
var annoCorrente = data.getFullYear();

var password1 = nome + '' + cognome + '' + colore + '' + annoCorrente;
var password2 = nome + ';' + cognome + ';' + colore + ';' + annoCorrente;

var annoCorrenteAbbr = annoCorrente - 2000 ;
var password3 = nome + ';' + cognome + ';' + colore + ';' + annoCorrenteAbbr;
document.getElementById('password1').innerHTML = password1;
document.getElementById('password2').innerHTML = password2;
document.getElementById('password3').innerHTML = password3;

document.getElementById('password-gen').setAttribute('class','visible');
