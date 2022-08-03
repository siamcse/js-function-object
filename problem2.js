function make_avg(num1, num2, num3){
    let total = num1 + num2 + num3;
    let avg=total/3;
    return avg;
}
let avg_marks = make_avg(57,60,60);
console.log(avg_marks);