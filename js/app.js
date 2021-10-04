//Outer Function
//1.Regulation Function
//2.Expression function
//3.Anonymous expression function
const myHello = function (name = null, age) {
    //inner function
    function displayName(){
        console.log("Hi" + " " + name + " " + age);
    }
    
    //Calling inner function
    //displayName();
    //return a function
    return displayName;
}
myHello("Mark",25);
