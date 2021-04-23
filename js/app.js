// business logic

function Order(size, topping, crust) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}
 

//  const size = new Order(large:2000, medium:1500, )
Order.prototype.fullorder1 = function(){
    return this.size + ", "+ this.topping +" ,"+ this.crust;
}
 

// order.size= new size(large,medium,small);
// var size = [large, medium, small];
// var sprice = [2000,1500, 1000];

// function sizes(large, medium, small) {
//     this.large=large;
//     this.medium= medium;
//     this.small=small;
// }
// var l
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
    $("#makeorderbtn").on("click",function(){
        $("form#myform").fadeIn();
        $(this).text("Make another order");
    })
})
$(document).ready(function(){
    $("form#myform").submit(function(event){
        event.preventDefault();
        var inputtedsize= $("#size").val();
        var inputtedtopping= $("#topping").val();
        var inputtedcrust= $("#crust").val();
         var fullorder= new Order(inputtedsize , inputtedtopping, inputtedcrust)
       
        // $("p#ordertopping").append(inputtedtopping);
        // $("p#ordercrust").append(inputtedcrust);
        function getprice(){
            price= [1]
           
        
        }

        $("p#fullorder").append(fullorder.fullorder1());
        $("#price").append(price)  
       

        $("form#myform").slideUp();
        



    })
})

