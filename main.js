// Compound interest calculator that calculates compounded interest value based on some user inputs

let init_amount = 20000
let monthly_contribution = 400
let number_of_years = 30
let interest_rate = 10
// step 1 - function to calculate the final value of the compounded interest

function compoundedInterest(init_amount, monthly_contribution, number_of_years, init_amount) {
    let total = init_amount

    let annual_contribution = monthly_contribution * 12

    for(let i = 0; i < number_of_years; i++) {
        total += annual_contribution
        total = total * ((100 + interest_rate) / 100)

    }
    return total
}

function calculateRegular(init_amount, monthly_contribution, number_of_years) {
    return init_amount + monthly_contribution * 12 *number_of_years
}

// step 2 - calculate the difference ie the effect the compounding had

// step 3 - run function that prompts user for all required inputs

// step 4 - return a statment with the financial breakdown