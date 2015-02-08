
pomodoroListModel = {
  completedPomos: [],


  setSubscriptions: function() {
    ea.subscribe('POMO_COMPLETED', 'handlePomoCompleted', Store.pomodoroList.handlePomoCompleted);
    
  },

  handlePomoCompleted: function(p) {
    pomo = p[0];
    var d = new Date();
    pomo.timestamp = d;
    if (pomo.isBreak) {
      pomo.description = 'break';
    }
    Store.pomodoroList.completedPomos.unshift(pomo);
  }

};


