// alert ("colin");

(function(){
  "use strict"


/*******************************************
QUESTION #1
 *******************************************/

console.log(items.price);

var itemTotal = items.reduce(function(total, item){

    console.log(item.price);
    return total + item.price;
}, 0);

console.log('The average price is $' + (itemTotal/items.length).toFixed(2) );

}());

/*******************************************
QUESTION #2
 *******************************************/
