// ===================================
// ABERTURA DO ENVELOPE
// ===================================

const envelope = document.querySelector(".envelope");
const loading = document.getElementById("loading");
const site = document.getElementById("site");


envelope.addEventListener("click", () => {

    envelope.classList.add("aberto");


    setTimeout(() => {

        loading.style.opacity = "0";

        site.classList.add("visivel");


        setTimeout(() => {

            loading.style.display = "none";

        }, 1500);


    }, 1200);


});




// ===================================
// ANIMAÇÃO DE ENTRADA
// ===================================

window.addEventListener("load", () => {

    document.querySelector(".conteudo").style.transform =
    "translateY(0)";

});





// ===================================
// CONTAGEM REGRESSIVA
// 05 DE DEZEMBRO - 20:00
// ===================================


const dataFesta = new Date(
    "December 5, 2026 20:00:00"
).getTime();



function atualizarContagem(){


    const agora = new Date().getTime();


    const distancia = dataFesta - agora;



    if(distancia <= 0){

        document.getElementById("dias").innerHTML = "00";

        document.getElementById("horas").innerHTML = "00";

        document.getElementById("minutos").innerHTML = "00";

        document.getElementById("segundos").innerHTML = "00";

        return;

    }



    const dias = Math.floor(
        distancia /
        (1000 * 60 * 60 * 24)
    );



    const horas = Math.floor(
        (distancia %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );



    const minutos = Math.floor(
        (distancia %
        (1000 * 60 * 60)) /
        (1000 * 60)
    );



    const segundos = Math.floor(
        (distancia %
        (1000 * 60)) /
        1000
    );



    document.getElementById("dias").innerHTML =
    String(dias).padStart(2,"0");



    document.getElementById("horas").innerHTML =
    String(horas).padStart(2,"0");



    document.getElementById("minutos").innerHTML =
    String(minutos).padStart(2,"0");



    document.getElementById("segundos").innerHTML =
    String(segundos).padStart(2,"0");


}



setInterval(atualizarContagem,1000);

atualizarContagem();






// ===================================
// CONTROLE DA MÚSICA
// ===================================


const musica = document.getElementById("musica");

const botaoMusica = document.getElementById("btnMusica");


let tocando = false;



botaoMusica.addEventListener("click",()=>{


    if(tocando){


        musica.pause();


        botaoMusica.innerHTML =
        "🎵 Música";


    }else{


        musica.play();


        botaoMusica.innerHTML =
        "⏸ Pausar";


    }


    tocando = !tocando;


});






// ===================================
// SUAVIDADE NOS LINKS
// ===================================


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();


        document.querySelector(
            this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});
