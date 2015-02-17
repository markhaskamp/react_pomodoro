var ea;

var Store = {
  timer: timer_model,
  pomodoroList: pomodoroListModel
}

function seconds_display(s) {
  return s < 10 ? '0' + s : s;
}

function junkDrawer(misc) {
  console.log('junkDrawer. this: ' + this.fn.name);
}

function handleTick(evt) {
  ea.publish('TICK', {});
}

ea = new EventAggregator();

Store.timer.setSubscriptions();
Store.pomodoroList.setSubscriptions();

setInterval(handleTick, 1000);



