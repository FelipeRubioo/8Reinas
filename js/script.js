
    var tablero = document.getElementById('tablero');
    var filas = tablero.rows;
    var celdas;

    //creamos las reinas
    var queen1 = document.createElement("img");
    queen1.src = "img/queen.png";

    var queen2 = document.createElement("img");
    queen2.src = "img/queen.png";

    var queen3 = document.createElement("img");
    queen3.src = "img/queen.png";

    var queen4 = document.createElement("img");
    queen4.src = "img/queen.png";

    var queen5 = document.createElement("img");
    queen5.src = "img/queen.png";

    var queen6 = document.createElement("img");
    queen6.src = "img/queen.png";

    var queen7 = document.createElement("img");
    queen7.src = "img/queen.png";

    var queen8 = document.createElement("img");
    queen8.src = "img/queen.png";

    function mostrarSolucion(ubi1,ubi2,ubi3,ubi4,ubi5,ubi6,ubi7,ubi8){
        //borramos las celdas antes de poner las nuevas reinas
        borrarCeldas(filas);
        //primera reina
        celda1 = document.getElementById(ubi1);
        celda1.appendChild(queen1);
        //segunda reina
        celda2 = document.getElementById(ubi2);
        celda2.appendChild(queen2);
        //tercera reina
        celda3 = document.getElementById(ubi3);
        celda3.appendChild(queen3);
        //cuarta reina
        celda4 = document.getElementById(ubi4);
        celda4.appendChild(queen4);
        //quinta reina
        celda5 = document.getElementById(ubi5);
        celda5.appendChild(queen5);
        //sexta reina
        celda6 = document.getElementById(ubi6);
        celda6.appendChild(queen6);
        //septima reina
        celda7 = document.getElementById(ubi7);
        celda7.appendChild(queen7);
        //octava reina
        celda8 = document.getElementById(ubi8);
        celda8.appendChild(queen8);
    }

    function borrarCeldas(filas){
        for (let i = 0; i < filas.length; i++) {
            celdas = filas[i].cells;
            for (let j = 0; j < celdas.length; j++) {
                celdas[j].innerHTML = "";
                
            }
            
        }

    }
