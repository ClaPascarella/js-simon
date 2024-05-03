//stampo 5 numeri random
let = random()

function random () {
    let numeriContainer = document.getElementById("numrandom");

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);

        let numeroElement = document.createElement("p");
        numeroElement.textContent = randomNumber;
        numeriContainer.append(numeroElement);
        
    }

    
}
//dopo 3 secondi i numeri visualizzati a schermo vengono nascosti
setTimeout( timer3s, 3*1000);

function timer3s() {
    document.querySelector("div").innerHTML = "";
    console.log("sono passati 3 secondi e vengono nascosti i numeri")

   
}

setTimeout(timer5, 5*1000);

function timer5() {
    let numUtente = prompt("scrivi i 5 numeri visualizzati prima");
     console.log(numUtente);
}


     








