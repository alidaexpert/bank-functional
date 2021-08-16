// add deposit &withdraw ammount and set to deposit &Withdraw total and set with balance function

// function bothInput(bothInputField) {
//     const depositInput = document.getElementById(bothInputField)
//     const depositValue = parseFloat(depositInput.value)
//     depositInput.value = ''
//     return depositValue
// }

// function bothTotal(bothTotalField, bothValue) {
//     const depositText = document.getElementById(bothTotalField)
//     const depositTotal = parseFloat(depositText.innerText)
//     const depositComplete = depositTotal + bothValue
//     depositText.innerText = depositComplete
// }

// function getCurrentBalance() {
//     const balanceText = document.getElementById('balance-total')
//     const balanceTotal = parseFloat(balanceText.innerText)
//     return balanceTotal
// }

// function balanceTotal(bothValue, isAdd) {
//     const balanceText = document.getElementById('balance-total')
//     const balanceTotal = parseFloat(balanceText.innerText)
//     if (isAdd == true) {
//         const balanceComplete = balanceTotal + bothValue
//         balanceText.innerText = balanceComplete
//     } else {
//         const balanceComplete = balanceTotal - bothValue
//         balanceText.innerText = balanceComplete
//     }
// }

function commonFunction(type) {
    const commonInput = document.getElementById(`${type}-input`)
    const commonValue = parseFloat(commonInput.value)
        // console.log(depositValue)

    const balanceText = document.getElementById('balance-total')
    const balanceTotal = parseFloat(balanceText.innerText)
        // balance amount add
    if (commonValue > 0 && commonValue <= balanceTotal) {
        const commonText = document.getElementById(`${type}-total`)
        const commonTotal = parseFloat(commonText.innerText)
            // console.log(depositTotal)
            // depositText.innerText = depositInput.value //simple adding
        const bothComplete = commonTotal + commonValue
        commonText.innerText = bothComplete //continuos adding with sum
            // const balanceText = document.getElementById('balance-total')
            // const balanceTotal = parseFloat(balanceText.innerText)
        if (type == 'withdraw') {
            const balanceComplete = balanceTotal - commonValue
            balanceText.innerText = balanceComplete
        } else {
            const balanceComplete = balanceTotal + commonValue
            balanceText.innerText = balanceComplete
        }

    } else {


        alert('Please type a positive number or sufficient balance!')

    }

    // clear input box 
    commonInput.value = ''

}









// add deposit ammount and set to deposit total and set with balance
document.getElementById('deposit-btn').addEventListener('click', function() {

    // const depositInput = document.getElementById('deposit-input')
    // const depositValue = parseFloat(depositInput.value)
    // console.log(depositValue)
    // const depositText = document.getElementById('deposit-total')
    // const depositTotal = parseFloat(depositText.innerText)
    //     // console.log(depositTotal)
    //     // depositText.innerText = depositInput.value //simple adding
    // const depositComplete = depositTotal + depositValue
    // depositText.innerText = depositComplete //continuos adding with sum

    //balance amount add
    // const balanceText = document.getElementById('balance-total')
    // const balanceTotal = parseFloat(balanceText.innerText)
    // const balanceComplete = balanceTotal + depositValue
    // balanceText.innerText = balanceComplete
    // clear input box 
    // depositInput.value = ''

    // ঝঙ্কার ভাইয়ের সিস্টেম 
    // const depositValue = bothInput('deposit-input')
    // if (depositValue > 0) {
    //     bothTotal('deposit-total', depositValue)
    //     balanceTotal(depositValue, true)
    //     document.getElementById('error1').style.display = 'none'
    // } else {
    //     document.getElementById('error1').style.display = 'block'
    //         // alert('Please type a positive number or sufficient balance!')

    // }

    // জ্যাম সেসন সিস্টেম 

    commonFunction('deposit')
})

// add withdraw ammount and set to withdraw total and set with balance
document.getElementById('withdraw-btn').addEventListener('click', function() {
    // validation 


    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawValue = parseFloat(withdrawInput.value)
    // console.log(withdrawValue)

    // const withdrawText = document.getElementById('withdraw-total')
    // const withdrawTotal = parseFloat(withdrawText.innerText)
    //     // console.log(withdrawTotal)
    //     // withdrawText.innerText = withdrawInput.value //simple adding
    // const withdrawComplete = withdrawTotal + withdrawValue
    // withdrawText.innerText = withdrawComplete //continuos adding with sum

    //balance amount add
    // const balanceText = document.getElementById('balance-total')
    // const balanceTotal = parseFloat(balanceText.innerText)
    // const balanceComplete = balanceTotal - withdrawValue
    // balanceText.innerText = balanceComplete
    // clear input box 
    // withdrawInput.value = ''

    // ঝঙ্কার ভাইয়ের সিস্টেম 
    // const withdrawValue = bothInput('withdraw-input')

    // if (withdrawValue > 0 && withdrawValue <= getCurrentBalance()) {
    //     bothTotal('withdraw-total', withdrawValue)
    //     balanceTotal(withdrawValue, false)
    //     document.getElementById('error2').style.display = 'none'
    // } else {
    //     document.getElementById('error2').style.display = 'block'
    //         // alert('Please type a positive number or sufficient balance!')

    // }

    // জ্যাম সেসন সিস্টেম 
    commonFunction('withdraw')
})