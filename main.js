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



/*******************************************
QUESTION #2
*******************************************/

 var cost = items.filter(function(item) {
   return (item.price < 18 && item.price > 14)

 });
 console.log(cost);
 console.log("Items that cost between $14.00 USD and $18.00 USD:");





/*******************************************
 QUESTION #3
*******************************************/


var quid = items.filter(function(product) {
  if(product.currency_code == 'GBP'){
    return true;
  } else {
    return false;
  }
});

// console.log(quid[0].title);

quid.forEach(function(product) {
  console.log(product.title);
})



/*******************************************
 QUESTION #4
 *******************************************/

var woodenItems = items.filter(function(product) {
  if(product.materials.includes('wood')){
    return true;
  } else {
    return false;
  }
});

woodenItems.forEach(function(item) {
  console.log(item.title);
});

console.log(woodenItems[0]);


/*******************************************
 QUESTION #5
*******************************************/

  var largeList = items.filter(function(item) {
    return (item.materials.length >= 8)

  });
  largeList.forEach(function(item){
    console.log(item.title);
    var materials = item.materials;
    materials.forEach(function(item){
      console.log(item);
    })


  });




/*******************************************
   QUESTION #6
   *******************************************/

var iMade = items.filter(function(item) {
  return item.who_made == 'i_did'


});

console.log(iMade.length + ' were made by their sellers');



}()); // END OF GLOBAL FUNCTION
