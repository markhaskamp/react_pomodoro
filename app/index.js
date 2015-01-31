var ea;

var Store = {
  timer: timer_model
}

function drunkDrawer(stuff) {
  console.log('drunkDrawer. stuff: ' + stuff);
}

function handleTick(evt) {
  ea.publish('TICK', {});
}

$(document).ready(function() {
  ea = new EventAggregator();

  Store.timer.setSubscriptions();

  setInterval(handleTick, 1000);
});

