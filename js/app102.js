//1.Declaration Function
const greeting = (name) => {
    console.log("Declaration function");
    console.log("Hello", name);
    function add(a = 5 , b = 10){
        return a + b ;
    }
    console.log (add())
    
}
greeting("Mark");