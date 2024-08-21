const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseenter", function(){
    imagen.src = "Imagen2.png";
});

imagen.addEventListener("mouseout", function(){
    imagen.src = "Imagen1.jpg";
});