var ea;

var Store = {
  timer: timer_model
}

function drunkDrawer(stuff) {
  console.log('drunkDrawer. stuff: ' + stuff);
}

function onTick(evt) {
  ea.publish('TICK', {});
}

$(document).ready(function() {
  ea = new EventAggregator();

  Store.timer.setSubscriptions();

  setInterval(onTick, 1000);
});

