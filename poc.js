var gdax = require('.');
var orderbookSync = new gdax.OrderbookSync(['BTC-USD', 'ETH-USD'], 'https://api.gdax.com', 'wss://ws-feed.gdax.com', null, {heartbeat: false, channels: ['full', 'heartbeat']});

orderbookSync.on('bookupdate', function (inst, time) {
    //console.log('bookupdate', inst, time);
    //book = orderbookSync.books[inst].getDepth(10);
    //console.log('BOOK', inst, book);
});

orderbookSync.on('tradeupdate', function (trade) {
    console.log('TRADE', trade);
});

orderbookSync.on('heartbeat', function (instrument, time) {
    console.log('HB', instrument, time);
});



