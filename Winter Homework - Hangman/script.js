let movies = ['Seven', 'Gone Girl', 'Memento', 'Panic Room', 'Split', 'Shutter Island'];
let books = ['Inferno', 'Animal Farm', 'Sapiens', 'Alchemist'];
let series = ['Black Mirror', 'How I Met Your Mother', 'Friends', 'IT Crowd']
let random = Math.floor(Math.random() * series.length);
let random2 = Math.floor(Math.random() * books.length);
let random3 = Math.floor(Math.random() * movies.length);

let randomMovies = movies[random3]; 
let randomBook = books[random2]; 
let randomSeries = series[random]; 

let randomHeading = Math.floor(Math.random() * 3)
let correctWord;
let categories = document.getElementById('category');

switch(randomHeading){
    case 0:
        categories.innerHTML ='The Choosen Category is movies'
        correctWord = randomMovies;
        break;
    case 1:
        categories.innerHTML ='The Choosen Category is books'
        correctWord = randomBook;
        break;
    case 2:
        categories.innerHTML ='The Choosen Category is series'
        correctWord = randomSeries;
        break;
}
let showResult = document.getElementById('result');
let hintBtn = document.getElementById('hint');
let aBtn = document.getElementById('btn-a');
let bBtn = document.getElementById('btn-b');
let cBtn = document.getElementById('btn-c');
let dBtn = document.getElementById('btn-d');
let eBtn = document.getElementById('btn-e');
let fBtn = document.getElementById('btn-f');
let gBtn = document.getElementById('btn-g');
let hBtn = document.getElementById('btn-h');
let iBtn = document.getElementById('btn-i');
let jBtn = document.getElementById('btn-j');
let kBtn = document.getElementById('btn-k');
let lBtn = document.getElementById('btn-l');
let mBtn = document.getElementById('btn-m');
let nBtn = document.getElementById('btn-n');
let oBtn = document.getElementById('btn-o');
let pBtn = document.getElementById('btn-p');
let qBtn = document.getElementById('btn-q');
let rBtn = document.getElementById('btn-r');
let sBtn = document.getElementById('btn-s');
let tBtn = document.getElementById('btn-t');
let uBtn = document.getElementById('btn-u');
let vBtn = document.getElementById('btn-v');
let wBtn = document.getElementById('btn-w');
let xBtn = document.getElementById('btn-x');
let yBtn = document.getElementById('btn-y');
let zBtn = document.getElementById('btn-z');
let buttons = document.getElementsByTagName('button');


let lives = document.getElementById('lives');
let showToUser = document.getElementById('lostOrWon');
let textToUser = document.getElementById('showTextToUser')


let userGuess = [];
let livesYouHave = 6;
let missedGuess = '';


for(let i = 0; i < correctWord.length; i++){
    if(correctWord[i] === " "){
        userGuess.push(" ")
    }

    else{
        userGuess.push('_')
        showResult.innerHTML = `<span>${userGuess}</span>`;
    }

}

function isLetterInTheWord(letter, tittle){
    let flag = false;
    let lower = tittle.toLowerCase();
    

    for(let i = 0; i < lower.length; i++){
        if(lower[i] === letter) {
            userGuess[i] = letter;
            console.log(userGuess);
            console.log(i)
            flag = true;
            showResult.innerHTML = `<span>${userGuess}</span>`;
            corectAnswer(lower);
        }
    }

 
        if(flag === false){
            missedGuess += letter
            textToUser.innerHTML = `<span>You missed, ${missedGuess} is not in the word.</span>`
            livesYouHave --;
            lives.innerHTML = `${livesYouHave}`;
            console.log(livesYouHave);

            if(livesYouHave == 0){
                for(let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                }
                showToUser.innerHTML = `<span>You lost!</span>`;
            }
        }
    }

    function corectAnswer(word) {
        let corect = '';
        for(let i = 0; i < userGuess.length; i++) {
            corect += userGuess[i];


            if(corect === word){
                textToUser.innerHTML = `<span>WIN WIN WIN !!!</span>`
                for(let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                }
                showToUser.innerHTML = `<span>You lost!</span>`;
             }
            }
        }
    

function hintAnswer(word){
        hint = Math.floor(Math.random() * word.length)
        userGuess[hint] = word[hint].toLowerCase();
        showResult.innerHTML = `<span>${userGuess}</span>`;
        corectAnswer(word.toLowerCase())
}



aBtn.addEventListener('click', function(){
    let letterA = aBtn.value;
    isLetterInTheWord(letterA , correctWord);

})

bBtn.addEventListener('click', function(){
    let letterB = bBtn.value;
    isLetterInTheWord(letterB , correctWord);

})

cBtn.addEventListener('click', function(){
    let letterC = cBtn.value;
    isLetterInTheWord(letterC, correctWord);
})

dBtn.addEventListener('click', function(){
    let letterD = dBtn.value;
    isLetterInTheWord(letterD, correctWord);
})

eBtn.addEventListener('click', function(){
    let letterE = eBtn.value;
    isLetterInTheWord(letterE,correctWord);
})

fBtn.addEventListener('click', function(){
    let letterF = fBtn.value;
    isLetterInTheWord(letterF, correctWord);
})

gBtn.addEventListener('click', function(){
    let letterG = gBtn.value;
    isLetterInTheWord(letterG, correctWord);
})

hBtn.addEventListener('click', function(){
    let letterH = hBtn.value;
    isLetterInTheWord(letterH, correctWord);
})

iBtn.addEventListener('click', function(){
    let letterI = iBtn.value;
    isLetterInTheWord(letterI, correctWord);
})

jBtn.addEventListener('click', function(){
    let letterJ = jBtn.value;
    isLetterInTheWord(letterJ, correctWord);
})

kBtn.addEventListener('click', function(){
    let letterK = kBtn.value;
    isLetterInTheWord(letterK, correctWord);
})

lBtn.addEventListener('click', function(){
    let letterL = lBtn.value;
    isLetterInTheWord(letterL, correctWord);
})

mBtn.addEventListener('click', function(){
    let letterM = mBtn.value;
    isLetterInTheWord(letterM, correctWord);
})

nBtn.addEventListener('click', function(){
    let letterN = nBtn.value;
    isLetterInTheWord(letterN, correctWord);
})

oBtn.addEventListener('click', function(){
    let letterO = oBtn.value;
    isLetterInTheWord(letterO,correctWord);
})

pBtn.addEventListener('click', function(){
    let letterP = pBtn.value;
    isLetterInTheWord(letterP, correctWord);
})

qBtn.addEventListener('click', function(){
    let letterQ = qBtn.value;
    isLetterInTheWord(letterQ,correctWord);
})

rBtn.addEventListener('click', function(){
    let letterR = rBtn.value;
    isLetterInTheWord(letterR, correctWord);
})

sBtn.addEventListener('click', function(){
    let letterS = sBtn.value;
    isLetterInTheWord(letterS, correctWord);
})

tBtn.addEventListener('click', function(){
    let letterT = tBtn.value;
    isLetterInTheWord(letterT, correctWord);
})

uBtn.addEventListener('click', function(){
    let letterU = uBtn.value;
    isLetterInTheWord(letterU, correctWord);
})

vBtn.addEventListener('click', function(){
    let letterV = vBtn.value;
    isLetterInTheWord(letterV, correctWord);
})

wBtn.addEventListener('click', function(){
    let letterW = wBtn.value;
    isLetterInTheWord(letterW, correctWord);
})

xBtn.addEventListener('click', function(){
    let letterX = xBtn.value;
    isLetterInTheWord(letterX, correctWord);
})

yBtn.addEventListener('click', function(){
    let letterY = yBtn.value;
    isLetterInTheWord(letterY, correctWord);
})

zBtn.addEventListener('click', function(){
    let letterZ = zBtn.value;
    isLetterInTheWord(letterZ, correctWord);
})

hintBtn.addEventListener('click', function(){
    hintAnswer(correctWord)
}) 