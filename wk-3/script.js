let student = "nic";
let mid = 40, final = 0;
let pass = null



document.write("<h2>",student," : </h2>");
document.write("Midterm : ",mid,"<br>");
document.write("Final : ",final,"<br>");
document.write("Total : ",mid + final,"<br>");


/*-----------------------IF ELSE-----------------------*/
if ((mid + final) >= 80){
    pass = "A"
}
else if ((mid + final) >= 70){
    pass = "B"
} else if ((mid + final) >= 60){
    pass = "C"
} else if ((mid + final) >= 50){
    pass = "D"
} else { pass = "E" }
document.write(student , " : " , pass);




/*-----------------------ARRAY-----------------------*/


let x = [["<img src='https://www.healthtodaythailand.in.th/wp-content/uploads/2017/12/004_002-e1518415506658.jpg' width=50>","<img src='https://hdmall.co.th/blog/wp-content/uploads/2024/07/watermelon-and-its-benefits-scaled.jpg' width=50 >","<img src='https://inwfile.com/s-dz/0dl3kj.jpg' width=50 >","<img src='https://www.jmthaifood.com/wp-content/uploads/2020/01/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-1.jpg' width=50 >","<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qki0yX3IH4JAmLasoyD6krVNROWAHrA0fR41mjHSKvQi-CCa9LZ_zvU&s=10' width=50 >"],
[100,200,300,400,500]];
let y = [2,8,6,7,2]
total = 0

let t = [
    {n:"som o", qty:2, price:100},
    {n:"tankmo", qty:8, price:200}
]
document.write("<br>")
document.write(t[1].n)


document.write("<table>");
document.write("<tr><th>Product</th><th>QTY</th><th>Price</th><th>Total</th></tr>");


for(let z=0;z < x[0].length;z++){

    document.write("<tr>");
    document.write("<td>" , x[0][z] , "</td>" );
    document.write("<td>" , y[z] , "</td>" );
    document.write("<td>" , x[1][z] , "</td>" );
    document.write("<td>" , x[1][z] * y[z] , "</td>" );
    document.write("</tr>");

    document.write("<br>")

    total += x[1][z] * y[z]
}
document.write("</table>");
document.write("<br>")
document.write("ALL TOTAL : ", total , "$")


for (h=1;h<=10;h++) {
    document.write("<br>","<img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHd0ancxZHZjcnI2YjRnNnM3ejJ1bnh1dTBveG5ia2tyZnY4dGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OuQmhmAAdJFLi/giphy.gif' width=50' alt='gif'>".repeat(h))
}
