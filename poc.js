var gdax = require('.');
var orderbookSync = new gdax.OrderbookSync(['BTC-USD', 'ETH-USD']);

console.log(orderbookSync);

orderbookSync.on('bookupdate', function (inst) {
    console.log('bookupdate', inst);
    book = orderbookSync.books[inst].getDepth(10);
    console.log('BOOK', inst, book);
});

orderbookSync.on('tradeupdate', function (trade) {
    console.log('TRADE', trade);
});


