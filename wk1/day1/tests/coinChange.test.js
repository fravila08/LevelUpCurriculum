
let coinChanger= require('../coinChanger/coinChange');

describe("This will place an input for 'paid' less than the input for 'price'.",()=>{
    test("coinchange will check if you can't afford the item",()=>{
        expect(coinChanger(17.50,20)).toBe("You don't have enough money to pay for this item.")
    })
})

describe("Exact amount for 'paid' will be equal to 'price'",()=>{
    test("ensure you paid the exact amount and you have no change",()=>{
        expect(coinChanger(17.50,17.50)).toBe("You paid the exact amount.")
    })
})

describe("Multiple pennies and dollars will be returned",()=>{
    test("That 2 pennies and 2 dollars are returned, but that there is no comma in between",()=>{
        expect(coinChanger(17.52,15.50)).toBe("Your optimal change is 2 dollars and 2 pennies.")
    })
})

describe("Pennies, dimes, dollars with commas",()=>{
    test("That 2 pennies, 2 dollars, and 1 dime is returned, with a comma in between",()=>{
        expect(coinChanger(17.52,15.40)).toBe("Your optimal change is 2 dollars, 1 dime, and 2 pennies.")
    })
})
