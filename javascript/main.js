  //Välj bakgrundsknappen randomiserar färgerna
  function randomize() {
    document.body.style.backgroundColor = randomColors();
  }

  // färgerna är tagna här ifrån:
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  //När man klickar på INFORMATION knappen så kommer en ruta upp med infon
  function myFunction() {
    var txt;
    if (confirm(
        "Hej vi pluggar på Linnéuniversitetet och utbildar oss till systemvetare. Detta är vår första hemsida där uppgiften är att få känna på HTML och CSS. Klicka gärna runt för att se våra olika funktioner och lite mer information om vilka vi är."
      )) {
      txt = "Detta är en testsida!";
    } else {
      txt = "You pressed Cancel!";
    }
  }

///// jQuery /////

  $(document).ready(function() {
  $(function() {
    $("#accordion").accordion();
    });
  });
