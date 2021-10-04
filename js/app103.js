//Closures Function
//Outer Function
function greet(){
    let name = "Jhon"; //

    //Inner function
    function displayName(){
        console.log("Hi: " + name);
        
    }
    //calling inner function

     return displayName();
}
greet();
