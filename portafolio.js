let menuVisible = false;

//funcion que oculta o muestra el menu
if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;
} else{
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// funcion para las animaciones de las skills
function efectoHabilidadades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("liderazgo");
    }
}
// se detecta el scroll para hacer la animacion
window.onscroll = function(){
    efectoHabilidadades();
}