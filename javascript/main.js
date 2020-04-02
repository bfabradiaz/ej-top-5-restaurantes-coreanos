// console.log("Hola mundo desde un archivo externo de JavaScript");

// Query Selector
// let tabla = document.querySelector(".table");

// console.log(tabla);

// //Query Selector All

// let links = document.querySelectorAll("a");

// links.forEach(function(link){
// console.log(link);
// })

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click',function(){
//        console.log(this); 
//     })
// })

// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link){
        
//Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitarle a content las clases de animacion que ya tiene
        content.classList.remove("zoomIn");
        content.classList.remove("animated");

        //Agregar clases para animar su salida zoomOut
        content.classList.add("zoomOut");
        content.classList.add("animated");
        
        //setTimeOut despues de cierto tiempo una vez
        //setInterval despues de cierto tiempo constantemente

        setTimeout(function(){
            location.href ="/";
        },600);

        

        return false;
        });
});

//Volver al menu principal



