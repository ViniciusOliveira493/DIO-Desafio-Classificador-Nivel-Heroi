const scanner = require("prompt-sync")();

let herois = [
    [
        "Julio",500
    ]
    ,[
        "Miguel",1000
    ]
    ,[
        "Rosa",3500
    ]
    ,[
        "Giovanni",6500
    ]
    ,[
        "Rebeca",7500
    ]
    ,[
        "Lucas",8500
    ]
    ,[
        "Bianca",9500
    ]
    ,[
        "Mario",12000
    ]
];

// -------------------------------- LOOP ---------------------------------------
while(true){
    listarHerois();

    let heroName = fazerPergunta("Digite o nome do herói");
    let heroi = buscarHeroi(heroName);

    if(heroi != undefined){
        classificarHeroi(heroi);        
    }else{
        console.log("O herói digitado não foi encontrado");
    }

    console.log("\n \n \n");    
}

// ------------------------------ FUNCTIONS ------------------------------------
function buscarHeroi(name){
    let heroi = undefined;
    for (let i = 0; i < herois.length; i++) {
        if(herois[i][0].toUpperCase() === name.toUpperCase()){
            heroi = herois[i];
        }
    }
    return heroi;
}

function classificarHeroi(heroi){
    let rankDoheroi = "";

    if(heroi[1]<1000){
        rankDoheroi = "Ferro";
    }else if(heroi[1]<2001){
        rankDoheroi = "Bronze";
    }else if(heroi[1]<6001){
        rankDoheroi = "Prata";
    }else if(heroi[1]<7001){
        rankDoheroi = "Ouro";
    }else if(heroi[1]<8001){
        rankDoheroi = "Platina";
    }else if(heroi[1]<9001){
        rankDoheroi = "Ascendente";
    }else if(heroi[1]<10001){
        rankDoheroi = "Imortal";
    }else{
        rankDoheroi = "Radiante";
    }

    console.log("O herói de nome "+heroi[0]+" está no nível "+rankDoheroi);
}

function listarHerois(){
    console.log("Lista de Heróis");
    for (let i = 0; i < herois.length; i++) {
        console.log(" - "+herois[i][0])        
    }
}

function fazerPergunta(texto) {
    return scanner(texto+": ");
}