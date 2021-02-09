var a = 11
var b = '3'

var c = false

var x = null



// data types: 
//     -Number
//     -String
//     -Boolean
//     -NaN
//     -undefined
//     -null

// == / !=
// === / !==


var name = 'Shivam'

var ternary = true ? 'do this' : 'else do this'

// Assignment
// Make a clone of Instagram home/profile feed (HTML/CSS)
// Expose a prompt to enter password
// If password length <= 10, alert 'Password very short, change your password'
// Else, alert 'Welcome to Instagram'
// -> Do this using ternary operator



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Saturday : 06/02/2021

// // +String => converts string to number
// var string1 = '34532423'

// var string2 = '567'

// // .toString()

// var number1 = 50
// var number2 = 60

// console.log(typeof (10 + 20 + 30 + 40 + number1.toString() + number2))

// var shivam = {
//     name: 'Shivam',
//     age: 45
// }

// var array1 = [2, 4, 6, 8, 10]
// var array2 = ['person1', 'person2']

// function func1(param1, param2) {
//     console.log(param1)
// }

// func1('arg1', 'arg2')

var users = {
    user1: {
        age: 45,
        height : '6ft'
    },
    user2: {
        age: 459,
        height : '8ft'
    },
    user3: {
        age: 5,
        height : '9ft'
    }
}


var ageArray = Object.keys(users).map(function(iterator) {
    return users[iterator.age]
})

console.log(ageArray)

// JSON : JavaScript Object Notation

// var users = [
//     {
//         name: 'X',
//         age: 45
//     },
//     {
//         name: 'Y',
//         age: 60
//     },
//     {
//         name: 'Z',
//         age: 48
//     }
// ]

// var stringifiedUsers = JSON.stringify(users)

// console.log(typeof stringifiedUsers)

// var parsedUsers = JSON.parse(stringifiedUsers)

// console.log(typeof parsedUsers)





// forEach return nahi karta -> same array me modifications
// map and filter return karte hain -> new array

// var newUsers = users.filter(
//     function (iterator) {
//         if (iterator.age > 60) {
//             return true
//         } else {
//             return false
//         }
//     }
// )

// console.log(newUsers)

// var newArray = objArray.map(
//     function(iterator) {
//         if (iterator.name==='X') {
//             iterator.age = 55
//         }
//         return iterator
//     }
// )



// console.log(newArray)


// var arrArray = ['X', 45]

// var tupleArray = [
//     ['X', 45],
//     ['Y', 67],
//     ['Z', 98],
// ]


// var obj = {
//     name: 'X',
//     age: 45,
//     ['home address']: 'Ranchi'
// }

// var keysArray = Object.keys(obj)

// var valuesArray = Object.values(obj)

// var entriesArray = Object.entries(obj)

// console.log(entriesArray)


// Object. //keys()
//         // values()
//         // entries()


// function objectConstructor (nameValue, ageValue, key, value) {
//     var newObj = {
//         name: nameValue,
//         age: ageValue,
//         key: value
//     }
//     console.log(newObj)
// }

// objectConstructor('Shivam', 45, 'college', 'BIT')




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var name = 'XYZ'

// let name2 = 'A'
// name2 = 'B'
// name2 = 'C'
// console.log(name2)

// const name3 = 'X'
// name3 = 'Y'
// console.log(name3)


// function getAddition (num1, num2) {
//     return num1+num2
// }

// const getAddition = (num1) => {
//     return num1+num2
// }



// console.log('Username')  //1ns
// console.log('Dob')      //2ns


// setTimeout(() => {
//     console.log('After 2 seconds')
// }, 2000)


// setTimeout(() => {
//     console.log('After 0 seconds') 

//     setTimeout(() => {
//         console.log('When?')
//     }, 500)
    
// }, 1000) 


// console.log('Posts from today') //4ns
// console.log('Posts from yesterday') //5ns



// const getUserVerification = new Promise((resolve, reject) => {

//     const age = 17
//     setTimeout(() => {
//         if (age>=18) {
//             resolve(true)
//         } else {
//             reject('You need to be over the age of 18 to proceed')
//         }
//     }, 4000)

// })

// getUserVerification.then((response) => {
//     console.log(response)
// })

// getUserVerification.catch((error) => {
//     console.log(error)
// })


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    alert(error)
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

09/01/2021

const divContainer = document.getElementById('container')

fetch('http://www.omdbapi.com/?s=gangs&page=1&apikey=cfc4bd14')
.then(res => res.json())
.then(data => {
    console.log(data.Search)
    data.Search.forEach(iterator => {
        console.log(iterator)
        divContainer.innerHTML = divContainer.innerHTML +  `
            <div class='card'>
                <img src='${iterator.Poster}' alt='image' />
                <span class='year'>${iterator.Year}</span>
                <span class='title'>${iterator.Title}</span>
                <button>Watch Now</button>
            </div>
            `
    })

})
