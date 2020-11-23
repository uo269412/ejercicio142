class ModificadorPantalla {
    constructor() {
    }

    pantallaCompleta() {
        var btn = document.getElementById("pantallaCompleta");
			
			btn.addEventListener("click", function (event) {
				
				if (!document.fullscreenElement) {
					document.documentElement.requestFullscreen();
				} else {
					document.exitFullscreen();
				}
				
			}, false);
			
			
			document.addEventListener("fullscreenchange", function (event) {
				
				console.log(event);
				
				if (!document.fullscreenElement) {
					btn.innerText = "Pantalla completa";
				} else {
					btn.innerText = "Salir pantalla completa";
				}
			});
			
			document.addEventListener("fullscreenerror", function (event) {
				
				console.log(event);
				
			});
    }
}

var modificadorPantalla = new ModificadorPantalla();

class Dibujo {
    constructor() {

    }

    loader() {
        //Cuadrados azules
        var canvas = document.getElementById('canvas');
        var canvas1 = canvas.getContext('2d');
        canvas1.fillStyle = "rgba(0, 0, 255, 1)";
        canvas1.fillRect(575, 50, 75, 75);
        canvas1.font = 'italic 40px sans-serif';
        canvas1.strokeStyle = "rgba(0, 0, 255, 1)";
        canvas1.strokeText("Cuadrados", 520, 200);
        canvas1.strokeStyle = "rgba(0, 0, 0, 1)";
        canvas1.strokeText("Figuras:", 200, 200);

        //Triángulos rojos
        canvas1.fillStyle = "rgba(255, 0, 0, 0.5)";
        canvas1.beginPath();
        canvas1.moveTo(950, 50);
        canvas1.lineTo(1000, 125);
        canvas1.lineTo(900, 125);
        canvas1.closePath();
        canvas1.fill();
        
        canvas1.strokeStyle = "rgba(255, 0, 0, 1)";
        canvas1.strokeText("Triángulos", 850, 200);

        //Círculos verdes
        canvas1.fillStyle = "rgba(0, 255, 0, 1)";
        canvas1.strokeStyle = "rgba(0, 255, 0, 1)"
        canvas1.beginPath();
        canvas1.arc(1275, 90, 40, 0, Math.PI * 2, true);
        canvas1.closePath();
        canvas1.fill();
        canvas1.stroke();

        canvas1.strokeStyle = "rgba(0, 255, 0, 1)";
        canvas1.strokeText("Círculos", 1200, 200);
    }
}
var dibujo = new Dibujo();

class ArrastrarSoltar {
    constructor() {
    }
    
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
     }
     
     allowDrop(ev) {
       ev.preventDefault();
     }
     
     drop(ev) {
       ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       ev.target.appendChild(document.getElementById(data));
       var element = document.getElementById(data);
       var elemento = ev.target;
       var correcto = 1;
        var imagenes = document.getElementsByClassName("imagen");
        for(var i=0; i<imagenes.length; i++){
            var element = imagenes[i].getAttribute("alt");
            var container = imagenes[i].parentNode.getAttribute("id");
            if (container != "container") {
                if (element != container) {
                    correcto = 0;
                }
            }   
        }
        if(correcto == 1){
            document.getElementById("resultado").innerHTML = "Todas las figuras están correctamente"; 
          } else{
            document.getElementById("resultado").innerHTML = "Una de las figuras está donde no tiene que estar";
          }
     }
}
var arrastrar = new ArrastrarSoltar();

