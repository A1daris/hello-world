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

//возведение Х в степень n (рекурсивная функция)
//- после 1го вызовва - вызывает сама себя, передавая на вход n-1 до тех пор пока n не станет равно 1 
function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert(pow(2,3));// 2 в кубе = 8

//арифметическая прогрессия 
function sumTo(n) {
 var result = 0;
for( var i = 0; i <= n; i++) { //- циклом
   result += i; 
}
return result
}
alert(sumTo(100))
//арифметическая прогрессия 
function sumTo(n) {
// if( n > 1) {
//return sumTo(n) = n + sumTo(n-1)    // рекурсией. песочницы выдают ошибку Maximum call stack size exceeded, надо потестить
//} else { result = sumTo(n)}console.log( result);

return ((1 + n)/2) * n    //по формуле пргрессии - тут все просто

}
alert(sumTo(100))
