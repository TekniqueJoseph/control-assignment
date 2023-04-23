// const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// let done = false
// while(!done){
//     const randomNumber = Math.random();
//     if (randomNumber > .7) { // could do this with the if statement only
//         done = true
//         alert (`its => ${randomNumber}`)
//     }
// }

    const randomNumber = Math.random();
    if (randomNumber > .7) { // could do this with the if statement only
        // done = true
        console.log(`Success! ${randomNumber} meets the condition.`)
    } else {
        console.log(`${randomNumber} does not meet the condition.`)
    }

// const digits = [1,2,3,4,5]

// let counter = 0;
// while (counter < digits.length ) {
//     console.log(digits[counter])
//     counter++
// };

// for (let i = 0; i < digits.length; i++){
//     console.log(digits[i])
// }

// for(const nums of digits){
//     console.log(nums)
// }

// for(let i = 4; i >= 0; i--) { //could use numbers.length-1 for initializer
//     console.log(digits[i])
// }

// let finished1 = false;
//     const rndNum = Math.random();
//     const rndNum2 = Math.random()
//     if ((rndNum >.7 && rndNum2 > .7) || (rndNum <= .2 || rndNum2 <= .2)) { 
//         console.log(`Complete. The 1st # is ${rndNum} & the 2nd # is ${rndNum2}.`)
//     } else {
//         console.log('None of the conditions were met.')
//     }
  
// let finished2 = false;
// while (!finished2) { 
//     const rndNum = Math.random();
//     const rndNum2 = Math.random()
//     if ((rndNum >.7 && rndNum2 > .7) || (rndNum <= .2 || rndNum2 <= .2)) {
//         finished2 = true
//     }
//     console.log(`Complete. The 1st # is ${rndNum} & the 2nd # is ${rndNum2}.`)
// }