// business logic

function Order(size, topping, crust) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}


//  const size = new Order(large:2000, medium:1500, )
Order.prototype.fullorder1 = function () {
    return this.size + ", " + this.topping + " ," + this.crust;
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
$(document).ready(function () {
    $("#makeorderbtn").on("click", function () {
        $("form#myform").fadeIn();
        $(this).text("Make another order");
        $("#checkoutbtn").show();
    })
    $("#checkoutbtn").on("click", function () {
        
        //     $(this).text("Hide");
        //     $(this).addClass("hidebtn");

    })
    // $(".hidebtn").on("click", function () {
    //     $(".cart").hide();
    //     $(this).text("Checkout");
    //     $(this).addClass(".checkoutbtn");
    // })

})
$(document).ready(function () {
    $("form#myform").submit(function (event) {
        event.preventDefault();
        var inputtedsize = $("#size").val();
        var inputtedtopping = $("#topping").val();
        var inputtedcrust = $("#crust").val();
        var fullorder = new Order(inputtedsize, inputtedtopping, inputtedcrust)

        // $("p#ordertopping").append(inputtedtopping);
        // $("p#ordercrust").append(inputtedcrust);

        var sizeprice, toppingprice, crustprice = 0;
        if (inputtedsize == "large") {
            sizeprice = 2500;

            // $("#price").append(sprice);
        } else if (inputtedsize == "medium") {
            sizeprice = 1500;
        } else if (inputtedsize == "small") {
            sizeprice = 1000;
        }

        // var toppingprice =0;
        if (inputtedtopping == "broccoli") {
            toppingprice = 250;
        } else if (inputtedtopping == "bacon") {
            toppingprice = 300;
        } else if (inputtedtopping == "Sausage") {
            toppingprice = 200;
        }

        // var crustprice = 0;
        if (inputtedcrust == "Newyorkstyle") {
            crustprice = 200;

        } else if (inputtedcrust == "Double-dough") {
            crustprice = 350;
        } else if (inputtedcrust == "Focaccia") {
            crustprice = 300;
        }
        const total = sizeprice + toppingprice + crustprice;



        $("ul#fullorder").append("<li><span class='orderlist'>" + fullorder.fullorder1() + "</span>" + "<span id='price'> -(" + sizeprice + "+" + toppingprice + "+" + crustprice + ")=" + total + "/=</span></li>");


        $("form#myform").slideUp();
        $(".cart").show();




    })
})