
// var age = prompt("당신의 나이는?", "0");
// if(age >= 20){
//     document.write("당신은 성인입니다.");
// }else{
//     document.write("당신은 미성년자입니다.");
// }

var s = "100";
var t = Number("500");
var aaa = 10 >= 100;
var bbb = Boolean("hello");

console.log(s+10, typeof s);
console.log(t+10, typeof t);
console.log(aaa, typeof aaa);
console.log(bbb, typeof bbb);
// --------------------------------------

var num1 = 15;
var num2 = 2;
document.write(num1 % num2);

document.write('<br/>')
document.write('<br/>')

document.write('111' + 22);

document.write('<br/>')
document.write('<br/>')

var num3 = 15
num3 += 10;
document.write(num3);

document.write('<br/>')
document.write('<br/>')

var num4 = 1;
num4++;
document.write(num4)

document.write('<br/>')
document.write('<br/>')

var a = 10;
var b = a++;
var c = ++b;
document.write(a);
document.write('<br/>')
document.write(b);
document.write('<br/>')
document.write(c);

document.write('<br/>')
document.write('<br/>')

var n1 = 10;
var n2 = "10";
if(n1 == n2) {
    document.write('n1 == n2');
    document.write('<br/>')
}
if(n1 === n2) {
    document.write('n1 === n2');
    document.write('<br/>')
}