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
        $.getJSON('rows.json', function(datos){
          $("#contenido").html("");
       
            $.each(datos["data"], function(idx,partidos){
              template += `<tr>
                <td>${partidos[9]}</td>
                <td>${partidos[11]}</td>
                <td>${partidos[13]}</td>
                <td>${partidos[14]}</td>
                <td>${partidos[15]}</td>
                <td>${partidos[16]}</td>
                <td>${partidos[17]}</td>
                <td>${partidos[29]}</td>
        
                </tr>`
            });
            $('tbody').html(template);
      });
   }