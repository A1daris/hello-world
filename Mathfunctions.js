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
//return sumTo(n) = n + sumTo(n-1)    // рекурсией. !!! бесконечной - не стоит возвращать с тем - же аргументом
//песочницы выдают ошибку Maximum call stack size exceeded, надо потестить
//!!!!! right choice: рекурсией.
//if (n == 1) return 1;
//  return n + sumTo(n - 1);
return ((1 + n)/2) * n    //по формуле пргрессии - тут все просто
}
alert(sumTo(100))

//factorial
function fact(n) {
 if( n == 1) return 1 //по тому же принципу
 else {return n * fact(n-1) }
 }
console.log(fact(19)); // 121645100408832000 шустро считает однако

// Fibonacci 
function fib (n) {
if(n == 1) {return 1}
else if(n == 2) {return 1}
else {return (fib(n-2) + fib(n-1))
}
}
alert(fib(27)) // на числе 47 моя функция подвесила браузер (
// but no error returned )

// Fibonacci 2 вариант
function fib (n) {
var res = [];
for (i = 2; i <= n; i++){
res[0] = 1;
res[1] = 1;
res[i] = res[i-2] + res[i-1];//пишем результат в массив
}
return(res[n-1])
}
alert(fib(77)) // за секунду

//среднее арифметическое
var arr = [1, 5,88,124,12];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
sum = sum + arr[i];
}
alert(sum/arr.length);
