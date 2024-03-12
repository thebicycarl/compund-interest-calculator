const prompt = require('prompt-sync')()

// Compound interest calculator that calculates compounded interest value based on some user inputs


// step 1 - function to calculate the final value of the compounded interest

function compoundedInterest(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = init_amount

    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total += annual_contribution
        total = total * ((100 + interest_rate) / 100)

    }
    return total.toFixed(2)
}

// step 2 - calculate the difference ie the effect the compounding had
function calculateRegular(init_amount, monthly_contribution, number_of_years) {
    let total_contribution = init_amount + monthly_contribution * 12 * number_of_years
    return total_contribution.toFixed(2)
}

// step 3 - run function that prompts user for all required inputs

function run() {
    let init_amount = parseInt(prompt('What is your initial invesetment? '))
    let monthly_contribution = parseInt(prompt('What is your monthly contribution? '))
    let number_of_years = parseInt(prompt('For how many years will you compound your investment? '))
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over these years? '))

    printOutput(init_amount, monthly_contribution, number_of_years, interest_rate)
}

// step 4 - return a statment with the financial breakdown
function printOutput(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundedInterest(init_amount, monthly_contribution, number_of_years, interest_rate)
    let value_without_compounding = calculateRegular(init_amount, monthly_contribution, number_of_years)
    let difference = (final_value - value_without_compounding).toFixed(2)
    let summary = `Initial amount: ${init_amount}\nMonthly contributions: ${monthly_contribution}\nNumber of years: ${number_of_years}\nInterest rate: ${interest_rate}\n\nFinal compounded value: ${final_value}\n Regular amount: ${value_without_compounding}\n Difference: ${difference}`

    console.log(summary)
}

run()