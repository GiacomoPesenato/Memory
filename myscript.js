var counter = 0, arrayMatch = [], arrayImage = [], arrayId = [], turns = 0,name,idUsciti = []
window.addEventListener("load", () =>{
    if(sessionStorage.getItem("NAME") === ""){
        window.location.replace("datiUtenti.html")
        alert("Inserisci lo username")
    }else {
        name = sessionStorage.getItem('NAME')
        console.log(name)
    }
})
function createArray() {
    arrayImage[0] = new Image()
    arrayImage[0].src = 'img/cane.PNG'
    arrayImage[1] = new Image()
    arrayImage[1].src = 'img/cane.PNG'
    arrayImage[2] = new Image()
    arrayImage[2].src = 'img/coccodrillo.PNG'
    arrayImage[3] = new Image()
    arrayImage[3].src = 'img/coccodrillo.PNG'
    arrayImage[4] = new Image()
    arrayImage[4].src = 'img/elefante.PNG'
    arrayImage[5] = new Image()
    arrayImage[5].src = 'img/elefante.PNG'
    arrayImage[6] = new Image()
    arrayImage[6].src = 'img/leone.PNG'
    arrayImage[7] = new Image()
    arrayImage[7].src = 'img/leone.PNG'
    arrayImage[8] = new Image()
    arrayImage[8].src = 'img/maiale.PNG'
    arrayImage[9] = new Image()
    arrayImage[9].src = 'img/maiale.PNG'
    arrayImage[10] = new Image()
    arrayImage[10].src = 'img/mucca.PNG'
    arrayImage[11] = new Image()
    arrayImage[11].src = 'img/mucca.PNG'
    arrayImage[12] = new Image()
    arrayImage[12].src = 'img/pecora.PNG'
    arrayImage[13] = new Image()
    arrayImage[13].src = 'img/pecora.PNG'
    arrayImage[14] = new Image()
    arrayImage[14].src = 'img/tigre.PNG'
    arrayImage[15] = new Image()
    arrayImage[15].src = 'img/tigre.PNG'
    //console.log("creato l'array correttamente, entro nella funzione shuffle")
    shuffle(arrayImage)
}
function shuffle(arrayImage) {
    var currentIndex = arrayImage.length, temporaryValue, randomIndex;
    //console.log(currentIndex)
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arrayImage[currentIndex];
        arrayImage[currentIndex] = arrayImage[randomIndex];
        arrayImage[randomIndex] = temporaryValue;
    }
    //console.log("array shufflato")
    //console.log(arrayImage)
}
async function cambioImmagine(id){
    if(counter === 0 || counter === 1){
        if(counter === 1 && arrayId[0] === id){
            //console.log(false)
        }else {
            if(arrayId.includes(id) || idUsciti.includes(id)){
                //console.log(false)
            }else{
                //console.log(arrayId[0]+" "+id)
                arrayId [counter] = id
                document.getElementById("" + id).src = arrayImage[id].src
                arrayMatch[counter] = new Image()
                arrayMatch[counter].src = document.getElementById("" + id).src
                counter++
                //console.log(counter)
                if (counter === 2) {
                    await sleepMatch(500)
                    //console.log("entrato nella funzione match")
                    match()
                }
            }
        }
    }
}
function sleepMatch(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function match(){
    if(arrayMatch[0].src.match(arrayMatch[1].src)){
        var score = document.getElementById("score").innerText
        score = parseInt(score) + 10
        Array.prototype.push.apply(idUsciti, arrayId)
        //console.log(score)
        document.getElementById("score").innerText = ""+score
        if(score === 80){
            await sleepEndGame(1000)
            alert(name+ " hai vinto in "+turns+" mosse, congratulazioni")
        }
    }
    else{
        document.getElementById(""+arrayId[0]).src = 'img/retro_carta.PNG'
        document.getElementById(""+arrayId[1]).src = 'img/retro_carta.PNG'
    }
    console.log(idUsciti)
    turns++
    //console.log(turns)
    counter = 0
    arrayId = []
    arrayMatch = []
}
function sleepEndGame(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}