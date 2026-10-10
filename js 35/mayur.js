var ary = [
    ["Mayur", 20, "Male", "BCA"],
    ["Mayur", 20, "Male", "BCA"],
    ["Mayur", 20, "Male", "BCA"],
    ["Mayur", 20, "Male", "BCA"]
];

document.write("<table border='1px' cellspacing='0'>");
for (var a = 0; a < 4; a++) {
    document.write("<tr>");
    for (var b = 0; b < 4; b++) {
        document.write("<td>" + ary[a][b] + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");