// business logic

function Order(size, topping, crust) {
    this.size = {};
    this.topping = {};
    this.crust = {};
}
 

//  const size = new Order(large:2000, medium:1500, )
Order.prototype.fullorder = function(){
    return this.size + this.topping + this.crust;
}
// var 
// order.size= new size(large,medium,small);

// function sizes(large, medium, small) {
//     this.large=large;
//     this.medium= medium;
//     this.small=small;
// }
// Order.prototype.sizes= function(){
//     return this.large + this.medium + this.small;
// }
// function  topping(type,price){
//     this.type=type;
//     this.price=price;
// }
// function crust(type,price){
//     this.type=type;
//     this.price=price;

// }


// USER INTERFACE LOGIC
$(document).ready(function(){
    $("form#myform").submit(function(event){
        event.preventDefault();
        var inputtedsize= $("#size").val();
        var inputtedtopping= $("#topping").val();
        var inputtedcrust= $("#crust").val();

        $("p#ordersize").append(inputtedsize);
        $("p#ordertopping").append(inputtedtopping);
        $("p#ordercrust").append(inputtedcrust);


    })
})

