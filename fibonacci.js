function fibonacci(n){
    
var arr=[0,1];
var x = arr.length;
if (x<n){
    for(i=0;i<n;i++){
        var a = arr[i]+arr[i+1];
        arr.push(a);
        
    }}
else{
    console.log(arr);
}
return arr;
}

var printing = fibonacci(7);
console.log(printing);