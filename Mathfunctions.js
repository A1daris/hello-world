//возведение Х в степень n
function pow(x,n) {
var result = x;

for ( var i = 1; i <= n ; i++){
result *= x;
}
return result
}
var te = pow(2,3);// 2 в кубе
alert(te);
