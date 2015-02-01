var ea;

var Store = {
  timer: timer_model
}

function junkDrawer(misc) {
  console.log('junkDrawer. stuff: ' + misc);
}

function handleTick(evt) {
  ea.publish('TICK', {});
}

ea = new EventAggregator();
Store.timer.setSubscriptions();
setInterval(handleTick, 1000);

