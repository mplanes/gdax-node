var gdax = require('.');
var orderbookSync = new gdax.OrderbookSync(['BTC-USD', 'ETH-USD']);

console.log(orderbookSync);

orderbookSync.on('bookupdate', function () {
    book = orderbookSync.books['BTC-USD'].getDepth(10);
    console.log('BOOK', book);
});

orderbookSync.on('tradeupdate', function (price, size, trade_id) {
    console.log('TRADE', price, size, trade_id);
});


