// function foo() {
//     var a = 1;
//     var b = a;
//     a = 2;
//     console.log(a) // 2
//     console.log(b) // 1
// }

// foo()

function foo(){
    var a = {name:"极客时间"}
    var b = a
    a.name = "极客邦" 
    console.log(a)
    console.log(b)
}
foo()