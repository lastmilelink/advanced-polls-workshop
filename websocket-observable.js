const rx = require('rxjs');
// const { webSocket } = require('rxjs/observable/dom/webSocket');
// rx.Observable.webSocket = webSocket;

console.log('LOG', rx.Observable.webSocket);

rx.Observable.webSocket(new WebSocket(''))
.do((data) => {
  console.log('data received: ', data);
});
