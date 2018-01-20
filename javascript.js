var card = {
  suit: "Spade",
  num: 8
};

var deck = [];

for ( var i=0; i<52; i++) {
  var num = (i % 13)+1;
  var suit;
  if (i < 13) {
    suit = "hearts";
  } else if (i < 26) {
    suit = "clubs";
  } else if (i < 39) {
    suit = "diamonds";
  } else {
    suit = "spades";
  }

  deck.push({;
    suit: suit,
    num: num
});
}
deck[0].suit

console.log();
