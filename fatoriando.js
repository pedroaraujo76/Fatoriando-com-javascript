var a = [];
var points = [
    {x:0, y:0},
    {x:1, y:1}
]

console.log(points[1])

a.push(1,2,3);
a.reverse(); 

points.dist = function() {

    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x-p1.x;
    var b = p2.y-p1.y;

    return Math.sqrt(a*a + b*b);
}

points.dist()

console.log(points.dist())

function fatorial (n) {
    var product = 1;
    while(n > 1) {

        product *= n;
        n--;
        console.log(product)
    }
    return product;
}
fatorial(4)

function fatorial2(l) {
    
    var i, product2 = 1;
    
    for(i=2; i <= l; i++)
    product2 *= i;
    console.log(product2)

    return product2;
} 
fatorial2(5);


