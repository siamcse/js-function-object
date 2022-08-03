// has return + has parameter

// function odd_even(num){
//     if(num%2==0){
//         console.log("Even");
//     }
//     else
//         console.log("odd");
// }
// odd_even(10);

// no return + has parameter

function odd_even(num){
    if(num%2==0){
        return true;
    }
    else
        return false;
}
let checkNumber = odd_even(5);
if(checkNumber == true)
    console.log("Even");

else
    console.log("Odd");