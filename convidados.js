// ===================================
// LISTA DE CONVIDADOS
// RSVP 15 ANOS YASMIM
// ===================================


const familias = {


    "Núbia": [
        "Carlos",
        "Núbia",
        "Ana Vitória",
        "Sara"
    ],


    "Rosilene": [
        "Rosilene",
        "Rodrigo",
        "Theo"
    ],


    "Mara": [
        "Mara",
        "Gilberto"
    ],


    "Vanusa": [
        "Vanusa",
        "Marcelo",
        "Estevão",
        "Valentina"
    ],


    "Marilene": [
        "Marilene",
        "Warley",
        "Miguel"
    ],


    "Lorrane": [
        "Lorrane",
        "Filipe"
    ],


    "Rita": [
        "Rita",
        "Otamilson",
        "Bruno"
    ],


    "Marlene": [
        "Marlene",
        "Otailson",
        "Maria Eduarda"
    ],


    "Nicole": [
        "Nicole",
        "David",
        "Maria Alice",
        "Luís Otávio"
    ],


    "Samara": [
        "Samara",
        "Renan",
        "Isabelly",
        "Emanuelly",
        "Eloah"
    ],


    "Soraia": [
        "Soraia",
        "Lara",
        "Luna",
        "Laerte"
    ],
  
    "Helen": [
        "Helen",
        "Edson",
        "Isaac"
    ],


    "Adiciane": [
        "Adiciane",
        "Júlia"
    ],


    "Tânia": [
        "Tânia",
        "Laíse",
        "Luiz Gustavo",
        "Lázaro"
    ],


    "Sandra": [
        "Sandra",
        "Wagner",
        "Anna Júlia",
        "Anna Elize"
    ],


    "Rafaela": [
        "Rafaela",
        "Lucas",
        "Ana Laura"
    ],


    "Joana": [
        "Joana",
        "Luciano",
        "Luiza"
    ],


    "Orlinda": [
        "Orlinda",
        "Lúcio Hélio",
        "Ryan"
    ],


    "Ezilane": [
        "Ezilane",
        "Maurício",
        "Kauã",
        "Sofia",
        "Isabelly"
    ],


    "Fernanda": [
        "Fernanda",
        "Otávio",
        "Benjamin"
    ],


    "Claudineia": [
        "Claudineia",
        "Sérgio",
        "Gabriela"
    ],


    "Vanuza": [
        "Vanuza",
        "Ilmar",
        "Isabela"
    ],


    "Fátima": [
        "Fátima",
        "Fausto"
    ],


    "Fabrine": [
        "Fabrine",
        "João Vitor"
    ],


    "Janaína": [
        "Janaína",
        "Jó",
        "Nicolas",
        "Sofia"
    ],


    "Jéssica": [
        "Jéssica",
        "Heitor",
        "Bryan",
        "Liz"
    ],


    "Marisa": [
        "Marisa",
        "Daniel"
    ],


    "Tereza": [
        "Tereza",
        "Osvaldo",
        "Rafael",
        "Washington",
        "Michele"
    ],
 
    "Vivian": [
        "Vivian",
        "Hebert"
    ],


    "Renata": [
        "Renata",
        "Roberto",
        "Samuel",
        "Maicon",
        "Marlon",
        "José Vicente"
    ],


    "Cida": [
        "Cida",
        "José Carlos"
    ],


    "Araci": [
        "Araci",
        "Silvio Henrique"
    ],


    "Bruna": [
        "Bruna",
        "Agnes"
    ],


    "Lúcia": [
        "Lúcia",
        "Márcio"
    ],


    "Sônia": [
        "Sônia",
        "Milton"
    ],


    "Silvio e Dalva": [
        "Silvio",
        "Dalva"
    ],


    "Leandra": [
        "Natan",
        "Leandra",
        "Helena"
    ],


    "Paulo Henrique": [
        "Paulo Henrique",
        "Jéssica"
    ],


    "Alice": [
        "Alice",
        "Maycon",
        "Liz"
    ],


    "Nayara": [
        "Nayara",
        "Junior",
        "Lavínia",
        "Vitória",
        "Helena"
    ],


    "Eliane": [
        "Eliane",
        "Zumiro",
        "Miguel"
    ],


    "Raíssa": [
        "Raíssa",
        "Leonardo"
    ]

};




// ===================================
// CONVIDADOS INDIVIDUAIS
// ===================================


const convidadosIndividuais = [

    "Nicole",
    "Laura",
    "Ágatha",
    "Thauany",
    "Maria Aparecida",
    "Roberto"

];




// ===================================
// SISTEMA RSVP
// ===================================


const formulario = document.getElementById("formRsvp");

const campoNome = document.getElementById("convidado");

const mensagem = document.getElementById("mensagem");



formulario.addEventListener("submit", function(e){


    e.preventDefault();


    const busca = campoNome.value.trim();


    let listaEncontrada = null;



    // Busca família

    Object.keys(familias).forEach(familia => {


        if(familia.toLowerCase() === busca.toLowerCase()){


            listaEncontrada = familias[familia];


        }


    });



    // Busca convidado individual

    if(!listaEncontrada){


        const individual =
        convidadosIndividuais.find(nome =>

            nome.toLowerCase() === busca.toLowerCase()

        );


        if(individual){

            listaEncontrada = [individual];

        }

    }




    if(listaEncontrada){



        mensagem.innerHTML = `

        <h3>Confirme sua presença</h3>

        <p>Selecione quem irá participar:</p>


        ${listaEncontrada.map(nome => `


        <label class="pessoa">


        <input type="checkbox" class="presenca">


        ${nome}


        </label>


        `).join("")}



        <br>


        <button onclick="confirmarPresenca()">

        Confirmar presença

        </button>


        `;



    }else{


        mensagem.innerHTML =

        "Nome não encontrado na lista. Verifique a digitação.";


    }



    campoNome.value = "";


});





// ===================================
// CONFIRMAR PRESENÇA
// ===================================


function confirmarPresenca(){


    const quantidade =

    document.querySelectorAll(".presenca:checked").length;



    if(quantidade > 0){


        mensagem.innerHTML = `


        ✨ Presença confirmada de ${quantidade} pessoa(s)! 


        <br><br>


        Obrigada por fazer parte desta noite especial. 💙


        `;


    }else{


        mensagem.innerHTML =

        "Selecione pelo menos uma pessoa.";


    }


} 
