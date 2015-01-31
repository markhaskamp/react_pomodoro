var ea;

var Store = {
  timer: timer_model
}

function drunkDrawer(stuff) {
  console.log('drunkDrawer. stuff: ' + stuff);
}

$(document).ready(function() {
  ea = new EventAggregator();

  Store.timer.setSubscriptions();
});
