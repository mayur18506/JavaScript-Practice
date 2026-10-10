var a = [10, 23, 8, 20];

document.write(a + "<br><br>");

var b = a.every(checkadult);  //every(), some(). 
document.write(b + "<br><br>");

function checkadult(age) {
    return age >= 18;
}

