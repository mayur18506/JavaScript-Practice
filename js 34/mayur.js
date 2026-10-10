var ary = new Array(3);

// ary[0] = 10;
// ary[1] = "Mayur";
// ary[2] = true;

for (var g = 0; g < 3; g++) {
    ary[g] = prompt("Enter the value : ");
}

document.write("<ul>");
for (var a = 0; a = 3; a++) {
    document.write("<li>" + ary[a] + "</li>");
}
document.write("</ul>");