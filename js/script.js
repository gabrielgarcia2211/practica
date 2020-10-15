function loadSe() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "coronavirus.html", true);
    xhttp.send();
}


function loadSi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "sintomas.html", true);
    xhttp.send();
}

function loadI() {
    location.reload();
  }


  
  //LLAMADA DE DATOS .JSON

  function loadP() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "casos.html", true);
    xhttp.send();
    carga();
  
  }


  function carga(){
    let template = '';
        $.getJSON('partidos.json', function(datos){
          $("#contenido").html("");
       
            $.each(datos["partidos"], function(idx,partidos){
              template += `<tr>
                <td>${partidos.fecha}</td>
                <td>${partidos.equipo1}</td>
                <td>${partidos.equipo2}</td>
                </tr>`
            });
            $('tbody').html(template);
      });
   }