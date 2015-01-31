var ea;

var Store = {
  timer: timer_model
}

function drunkDrawer(stuff) {
  console.log('drunkDrawer. stuff: ' + stuff);
}

$(document).ready(function() {
  ea = new EventAggregator();
  ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
  ea.subscribe('TIMER_TOGGLE', 'handleTimerToggle', Store.timer.handleTimerToggle);
});
