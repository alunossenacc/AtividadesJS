var x = 100;
function testScope() {
    let x = 50;
    console.log("na funçao x = " + x);    
    if (true) {
        let x = 30;
        console.log("no if = " + x); 
    }
}

testScope();
console.log("fora da funçao x = " + x); 
