// let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[1]) // lamborghini

// console.log(cars.length)

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55000,
}]

console.log(ourCars[1].miles)

const { miles, year } = ourCars[0]

const age = 2022 - year
const mileage = miles / age

console.log(mileage + ' miles per year')

if (mileage < 1000) {
    console.log('This is a LOW mileage car.')
} else {
    console.log('This is NOT a low mileage car.')
}
mileage < 1000 ? console.log('This is a LOW mileage car.') : console.log('This is NOT a low mileage car.')

const isIt = (mileage < 1000) ? 'is a' : 'is NOT a'
console.log(`This ${isIt} low mileage car.`)