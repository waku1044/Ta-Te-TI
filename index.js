
//1:30hs se le tomo la fiebre y tenia 37.1
//2:28hs se le vuelve a tomar temp y tenia 36.9
let casilleros = document.querySelectorAll('.casillero')

casilleros.forEach(casillero => casillero.addEventListener('click',(e)=>turno(e.target)))
let players = document.querySelectorAll('header p');
console.log(casilleros)
let count = 0;
let posiciones = [];
//Seleccion del player 1 cuando carga la pagina,
players[0].style.background = 'forestgreen';
players[0].style.padding = '10px 20px';
players[0].style.borderRadius = '15px';


function turno(destino){
    count++;
    
    if(!destino.hasChildNodes()){
        if(count % 2 == 0){
            circulo(destino)    
        }else{
            cruz(destino);
        }
    }
    ganador('X');
    ganador('O');
}
// Creando las figuras 'x' / 'o';
function circulo(destino){
    if(!destino.hasChildNodes()){
        players[0].style.background = 'forestgreen';
        players[0].style.padding = '10px 20px';
        players[0].style.borderRadius = '15px';
        players[1].style.background = 'none';

        let h2 = document.createElement('h2');
        h2.innerHTML = 'O';
        h2.style.fontSize = '4rem';
        destino.appendChild(h2);
    }
    
}
function cruz(destino){
    
    if(!destino.hasChildNodes()){
        players[1].style.background = 'forestgreen';
        players[1].style.padding = '10px 20px';
        players[1].style.borderRadius = '15px';
        players[0].style.background = 'none';
        let h2 = document.createElement('h2');
        h2.innerHTML = 'X';
        h2.style.fontSize = '4rem';
        destino.appendChild(h2);
    }
    
}
function ganador(figura){
    if(casilleros[0].innerText == figura &&
     casilleros[1].innerText == figura &&
     casilleros[2].innerText == figura ||
     casilleros[3].innerText == figura &&
     casilleros[4].innerText == figura &&
     casilleros[5].innerText == figura ||
     casilleros[6].innerText == figura &&
     casilleros[7].innerText == figura &&
     casilleros[8].innerText == figura ||
     casilleros[0].innerText == figura &&
     casilleros[3].innerText == figura &&
     casilleros[6].innerText == figura ||
     casilleros[1].innerText == figura &&
     casilleros[4].innerText == figura &&
     casilleros[7].innerText == figura ||
     casilleros[2].innerText == figura &&
     casilleros[5].innerText == figura &&
     casilleros[8].innerText == figura ||
     casilleros[0].innerText == figura &&
     casilleros[4].innerText == figura &&
     casilleros[8].innerText == figura ||
     casilleros[2].innerText == figura &&
     casilleros[4].innerText == figura &&
     casilleros[6].innerText == figura){
         if(figura == 'X'){
            players[0].style.background = 'forestgreen';
            players[0].style.padding = '10px 20px';
            players[0].style.borderRadius = '15px';
            players[1].style.background = 'none';
            players[1].style.padding = 'none';
            players[1].style.borderRadius = 'none';
            
            let modal = document.querySelector('dialog');
            let form = document.querySelector('.form')
            //creando contenido dentro del modal
            let boton = document.createElement('button');
            boton.innerText = 'Volver a empezar';
            boton.classList.add('w-75', 'btn', 'btn-primary', 'fw-bold');
            boton.setAttribute('type', 'submit')
            modal.classList.remove('hidden')
            let h2 = document.createElement('h2');
            h2.innerText = 'GANÓ PLAYER 1';
            h2.style.fontWeight = 'bold';
            let img = document.createElement('img');
            img.src = 'https://www.pinclipart.com/picdir/middle/29-299537_cup-clipart.png'
            img.classList.add('copa');
            form.appendChild(h2)
            form.appendChild(img)
            form.appendChild(boton)
            modal.show()
               
         }else{
            players[1].style.background = 'forestgreen';
            players[1].style.padding = '10px 20px';
            players[1].style.borderRadius = '15px';
            players[0].style.background = 'none';
            players[0].style.padding = 'none';
            players[0].style.borderRadius = 'none';
            let modal = document.querySelector('dialog');
            let form = document.querySelector('.form')
            //creando contenido dentro del modal
            let boton = document.createElement('button');
            boton.innerText = 'Volver a empezar';
            boton.classList.add('w-75', 'btn', 'btn-primary', 'fw-bold');
            boton.setAttribute('type', 'submit')
            let img = document.createElement('img');
            img.src = 'https://www.pinclipart.com/picdir/middle/29-299537_cup-clipart.png'
            img.classList.add('copa');
            modal.classList.remove('hidden')
            let h2 = document.createElement('h2');
            h2.innerText = 'GANÓ PLAYER 2';
            h2.style.fontWeight = 'bold';
            
            form.appendChild(h2)
            form.appendChild(boton)
            modal.show()
            
         }
         
     }
        
}
