function obtienerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

var hombre =  [        "______" + '<br/>',
                       "   | " + '<br/>',
                       "   | " + '<br/>',
                       "   O" + '<br/>',
                       " /\n",
                       "| " ,
                       "\\\n   " + '<br/>',
                       " /     ",
                       "\\\n  " + '<br/>',
                       "______" + '<br/>'];

var letraPalabra = []; // declaramos un array vacio
var palabra = obtienerPalabraSecreta(); // obtenemos la palabra aleatoria de la lista de palabras

function ocultaPalabra() 
{ 
  var _cadenas = ""; // creamos un string vacio
  for (var i=0 ; i<palabra.length ; i++) // recorremos la palabra secreta
    _cadenas += "*"; // por cada elemento lo cambia por el *
  return _cadenas;// retornamos
}

function juego()
{
    var _cadenas = ocultaPalabra().split("");// obtenemos la palabra que ocultamosy la separamos
    var letra = document.getElementById('letra').value;// capturamos las letras del teclado ingresadas
    letraPalabra.push(letra);// cada elemento que ingrecemos la añadiremos a nuestro array vacio
    var errores = 0; // iniciamos un contador de errores en 0
    var hombrecito = ""; // creamos un string vacio

    for(var i=0 ; i < palabra.length ; i++) // recorremos la palabra elemento por elemento
    {
      for(var j=0 ; j < letraPalabra.length ; j++) // recorremos las letras tecleadas que ingresamos
          if(palabra[i]==letraPalabra[j]) // comparamos la palabra y las letras ingresadas por teclado
              _cadenas[i] = letraPalabra[j]; // si hay iguales las añadimos a _cadenas
    }

    for(var i=0 ; i < letraPalabra.length ; i++) // recorremos las letras tecleadas
      if(palabra.indexOf(letraPalabra[i])==-1) // el indexOf inicia la busqueda de las letras si no hay dicho valor devuelve -1
            errores += 1; // acumulador

    for(var i=0 ; i < errores ; i++) // recorremos desde 0 hasta la cantidad de errores encontrados
    {
        hombrecito += hombre[i]; // por cada error encontrado nuestra una parte del hombre ahorcado
        document.getElementById('ahorcado').innerHTML = hombrecito ;  // mostramos al hombre en el html
    }
    
    if(errores == 10) // si los errores son iguales a 10 
        alert("ESTAS AHORCADO - GAME OVER"); // mensaje de alerta que perdimos el juego
    document.getElementById('palabraSecreta').innerHTML = _cadenas.join(""); // mostramos la palabra secreta
}

