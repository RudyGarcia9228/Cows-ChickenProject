function myFunction() {
  var a = document.querySelector("#legs");
  var b = document.querySelector("#heads");
  var d = document.querySelector("#nestedCon");
  /*legs divided in half*/
  var e = a.value / 2;
  /*subtracting divided number legs by heads*/
  var f = e - b.value;
  var g = b.value - f;
  var h = b.value / a.value;
  var i = document.querySelector("#nestedCon");
  var j = document.querySelector("#con-h");
  d.innerHTML =
    " Dividing amount of legs in half: " +
    e +
    " <br>Subtracting " +
    e +
    " from " +
    b.value +
    " <br> total number of 4 legged cows: " +
    f +
    " <br> Subtracting " +
    f +
    " from " +
    b.value +
    " <br> total number of 2 legged chicken: " +
    g +
    "<br><br><span style='color:#9a5f58;font-weight:bold;padding-left:50px;'> Made with &hearts; Rudy Romero.";

  if (f < 0 || g < 0) {
    responsiveVoice.speak(
      " sorry to bring the bad news, but. you have some animals with  missing legs somewhere.",
      "US English Female",
      { pitch: 1.0 }
    );
    j.innerHTML =
      " <img src='http://mfconsultoria.org/wp-content/uploads/2017/12/alerta.png' width='20px'> you have a fucked up animal.";
    j.style = "color:#ff0000;";
  } else if (f == 0 && g == 0) {
    responsiveVoice.speak(
      "you currently do not have any animals right now.",
      "US English Female",
      { pitch: 1.0 }
    );
    j.innerHTML =
      "<img src='https://turismodecantabria.com/imagenes/Noticias/71590916-D278-D93C-99A7-00B750FF76D4.png/resizeMod/0/1200/informacion-tursitica.png' width='19px'> You Currently have no animals.";
    j.style = "color:darkblue;";
  } else if (Number.isInteger(f)) {
    responsiveVoice.speak(
      "all animals are looking good. you have. " +
        f +
        " .cows. and., " +
        g +
        " .chicken with no missing head, or leg",
      "US English Female",
      { pitch: 1.0 }
    );
    j.innerHTML =
      " <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Accept.svg' width='20px'> all animals are looking good.";
    j.style = "color:#60af30;";
  } else {
    console.log("nothing");
  }
}
