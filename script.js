console.log('buh')

let again = 'soy una variable let' // TypeScript: let again: String = 'soy una variable let'
const forever = 'soy una variable constante'
var iz = 'soy una var-iz'
var güenza = 'soy una var-güenza'
const list = []
const fullList = [2, 0]
const anotherList = list.concat(9)
let argia = [1, 2, 3, 4, 5, 6]

console.log(forever.length)

again = again.toUpperCase()
list.push(0, 2, 6)
fullList.push(-2)
argia.forEach(i => {console.log(i)})
console.log(argia)

console.log(forever.toUpperCase(), again, iz, list, fullList, list[0], fullList[0], anotherList)

const person = {
    name: 'hank',
    age: 19,
    profession: 'programmer',
    human: true,
    languages: ['English', 'PHP', 'JavaScript']
}

const field3 = 'profession'

console.log(person[field3])

console.log(person, person.name, person.languages[0][2])

if (person.human) {console.log(person.age)}

person.languages.forEach(i => {console.log(i)})

console.log(subtract(10, 5)) // The result is printed on the console because the function is declared and not expressed
console.log(sum(10, 10)) // Cannot access sum because it's not been initialized yet

//Function expression: function assigned to a constant
const sum = (a, b) => {return a + b}  // Parámetros entre paréntesis

const result = sum(1, 2) // Argumentos entre paréntesis

console.log(result)

const op1 = -5
const op2 = -2

console.log(sum(op1, op2))

//Function declaration:

function subtract(d, c) {
    return d - c
}

console.log(subtract(3, 4))