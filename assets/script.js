alert ("moudhi")
console.log(18)
console.log("%cim a grad", "color: red")
// javaScript is not java //
let budget =  20 
console.log("budget is " + budget)
 if (budget >= 30 && budget <= 80) {
        console.log("you can buy the gift")
    } else {
        console.log("you can not buy the gift")
    }    

let total = budget + 30
console.log("budget is after adding 30 : " + total)

if (total >= 30 && total <= 80) {
    console.log("you can buy the gift")
} else {
    console.log("you can not buy the gift")
} 

let grade = prompt("enter your grade")
switch (true) {
    case (grade >= 90 && grade <= 100): 
        console.log("لقد حصلت على امتياز 🥳");
        break;
    case (grade >= 80 && grade <= 89):             
        console.log("لقد حصلت على جيد جداً🤩");
        break;
    case (grade >= 70 && grade <= 79  ):
        console.log("لقد حصلت على جيد🙂");
        break;
    case (grade >= 80 && grade <= 89 ):
        console.log("لقد حصلت على جيد جداً🤩");
        break;
    case (grade >= 60 && grade <= 69 ):
        console.log("لقد حصلت على مقبول😕");
        break;
    case (grade >= 50 && grade <= 59):
        console.log("لقد حصلت على ضعيف☹️");
        break;
    case (grade <= 50 ):
        console.log("راسب💔");
        break;
}