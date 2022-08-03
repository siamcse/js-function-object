function make_avg(marks,n){
    let total=0, avg_marks;
    for(let i=0;i<n;i++){
        total += marks[i];
    }
    avg_marks = total/n;
    return avg_marks;
}
let marks = [57,60,60,58,54,60];
let n=marks.length;
console.log(make_avg(marks,n).toFixed(2));