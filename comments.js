/*

//function


// criar um aplicativo de frases motivacionais



//declaraction - declaracao da funcao
//function statement
function createPhrases() {
    console.log('estudar é bom')
    console.log('paciencia e persistencia')
    console.log('revisao é a mae do aprendizado')
}

//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

createPhrases()

console.log('fim do programa')




//function expression
//function anonymou

//parametros (parameters)
const sum = function(number1, number2){
    total = number1 + number2;
    return total
}


let number1 = 34
let number2 = 25

sum(number1,number2) //arguments

console.log(`O numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)



//function scope
let subject = 'create video'

function createThink(subject) {
   subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))


//arrow function

const sayMyName = (name) => {

    console.log(name)
}

sayMyName('Felipe')





//Manipulando Strings e Números

//Transformar String em Númerp e Número em String




let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))



//Manipulando Strings e Númerps

//Contar quantps caracteres tem uma palavra e quantos diítos tem um numero

let word = "paralelepipedo"
console.log(word.length)
let number = 1234;
console.log(String(number).length)



//Manipulando Strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vígula

let number = 434.434343434
console.log(number.toFixed(2).replace(".", ","))


//Manipulando Strings e Números

//transforme letras minusulas em maiusculas. Faça o contrario disso tambem

let word = "programar é muito bacana"
console.log(word.toUpperCase())



//Manipulando Strings e Arrays

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posiçao do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "eu quero viver o amor"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)



//manipulando Strings

//verificar se o texto contem a palavra amor

let Phrase = "eu quero viver o Amor"
console.log(Phrase.includes("Amor"))

 

    new

    *left-hand-side expression
    *criar um novo objeto

    */

    let date = new Date('2020-12-01')
    console.log(date)
    

//OPERADORES LÓGICOS

// AND &&

// OR ||

// NOT !


//Operador Condicional (Ternário)

//Depndendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos
//Café da manhã top
let pao = true
let queijo = true

/*
const niceBreakfast = pao && queijo ?'café top' : 'cafe ruim'
console.log(niceBreakfast)
//Maior de 18


let age = 19
const canDrive = age >= 18 ? 'can drive' : "can't drive";

console.log(canDrive)



//switch

let expression = 'c'


switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break;
        
    case 'b':
        //codigo b
        console.log('b')
        break;

    default:
        console.log('default')
        break;


}

//estrutura de repetição 
//for

for(let i = 10; i > 0; i--) {
    if (i === 5) {
        continue;   //usado para pular algo, neste caso ira pular o 5
    }
    console.log(i)
}


//while
let i = 0
while(i < 10) {
console.log(i)
i++;
}

//for...of

let name = 'felipe'
let names = ['joao', 'paulo', 'pedro']

for (let name of names) {

    console.log(name)
}//for...in

let person = {
    name: 'jonh',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

//transformar notas escolares

let nota = 90;

if (nota >= 90) {
    console.log('Parabens, sua nota foi A')
}

else if (nota >= 80){
    console.log('sua nota foi B')
}

else if (nota >= 70){
    console.log('sua nota foi C')
}

else if (nota >= 60){
    console.log('sua nota foi D')
}

else if (nota < 60){
    console.log('sua nota foi F')
}





*/
